import mongoose, { Document } from 'mongoose';

import { Area as AreaSharedSchema } from '../../../types/common/area'
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";

const AreaSchema = new mongoose.Schema({
    did: {
        type: String,
        unique: true,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    coordinates: {
        type: Array,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    biomes: {
        type: Array,
        required: true
    },
    carbonCapture: {
        type: Number,
        required: true
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
    const self: any = this;

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
