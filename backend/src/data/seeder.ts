import { users } from "./sampleData/userData";
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";
import { User } from '../models/User';

const createFakeUsers = async () => {
    users.map(async (user: any) => {
        const DID_Data = await createDID();
        const encryptedPrivKey = encrypt(DID_Data.key.secret);
        const newUser: any = await User.create({
            username: user.username,
            password: user.password,
            wallet: user.wallet,
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
}

export { createFakeUsers }
