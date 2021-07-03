import { users } from "./sampleData/userData";
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";
import { User } from '../models/User';
import { connectToMongo } from '../config/mongo';
import { MONGODB_URI } from '../util/secrets';

connectToMongo(MONGODB_URI || "mongo://127.0.0.1:27017/local");

users.map(async (user: any) => {
    const DID_Data = await createDID();
    const encryptedPrivKey = encrypt(DID_Data.key.secret);
    const newUser: any = await User.create({
        username: user.username,
        password: user.password,
        did: DID_Data.did,
        key: {
            pub: DID_Data.key.public,
            priv: encryptedPrivKey
        }
    }).catch((error) => {
        console.error(`unable to create username ${user.username}`);
    });
    newUser ? console.log(`created new user : ${newUser._id}`) : null;
});
