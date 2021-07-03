import mongoose, { Document } from 'mongoose';

const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    did: {
        type: String,
        unique: true,
        required: true
    },
    wallet: {
        type: String,
        required: false
    },
    key: {
        pub: {
            type: String,
            required: true
        },
        priv: {
            iv: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    }
});

/* ----- Agent Type Definition ---- */

export interface IAgentModel extends mongoose.Document {
    did: string;
    key: {
        pub: string,
        priv: {
            iv: string,
            content: string
        };
    };
}

/* ----- Agent Methods ---- */

AgentSchema.pre('save', async function (next) {
  const self: any = this;
  next();
});

const Agent = mongoose.model<IAgentModel>('Agent', AgentSchema);
export { Agent };
