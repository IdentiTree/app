import mongoose, { Document, Schema } from 'mongoose';

import { Area as AreaSharedSchema } from '../../../types/common/area'
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";


const AreaSchema = new Schema<IAreaModel>({
    did: {
        type: String,
        unique: true,
        required: false
    },
    wallet: {
        type: String,
        required: false
    },
    key: {
        pub: {
            type: String,
            required: false
        },
        priv: {
            iv: {
                type: String,
                required: false
            },
            content: {
                type: String,
                required: false
            }
        }
    }
});

/* ----- Area Type Definition ---- */

export interface IAreaModel extends AreaSharedSchema, mongoose.Document {
    did: string;
    key: {
        pub: string,
        priv: {
            iv: string,
            content: string
        };
    };
}

/* ----- Area Methods ---- */

AreaSchema.pre('save', async function (next) {
    let self: any = this;

    console.log("pre save", this)
    
    const DID_Data = await createDID();
    const encryptedPrivKey = encrypt(DID_Data.key.secret);
    
    console.log("DID_Data", DID_Data)
    console.log("encryptedPrivKey", encryptedPrivKey)

    self.did = DID_Data.did;
    self.key = {
        pub: DID_Data.key.public,
        priv: encryptedPrivKey
    };

    console.log("pre save 2", this)

    // next();
});

const Area = mongoose.model<IAreaModel>('Area', AreaSchema);
export { Area };
