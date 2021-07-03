import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    did: {
        type: String,
        unique: true,
        required: true
    },
    wallet: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "/image/defaultavatar.png"
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

/* ----- User Type Definition ---- */

export interface IUserModel extends mongoose.Document {
    username: string;
    password: string;
    did: string;
    avatar: string;
    key: {
        pub: string,
        priv: {
            iv: string,
            content: string
        };
    };
}

/* ----- User Methods ---- */

UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  const self: any = this;
  return await bcrypt.compare(enteredPassword, self.password);
};

UserSchema.pre('save', async function (next) {
  const self: any = this;
  if (!self.isModified('password')) {
    next();
  } else {
    const salt = await bcrypt.genSalt(10);
    self.password = await bcrypt.hash(self.password, salt);
  }
});

const User = mongoose.model<IUserModel>('User', UserSchema);
export { User };
