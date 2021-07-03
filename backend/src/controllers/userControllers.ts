
import asyncHandler from "express-async-handler";
import { User } from '../models/User';
import { Request, Response } from 'express';
import { tokenize } from '../util/jwt';

const userLogin = asyncHandler(async (req: Request, res: Response) => {
    interface IUserLoginProps {
        username: string,
        password: string
    }

    const { username, password }: IUserLoginProps = req.body;

    const user: any = await User.findOne({ username });

    if (await user.matchPassword(password)) {
        const token: string = tokenize(user._id);
        res.json({
            token,
            username: user.username,
            did: user.did,
            avatar: user.avatar,
            wallet: user.wallet
        });
    } else {
        res.status(403);
        throw new Error('Incorrect password');
    }
});

export { userLogin };
