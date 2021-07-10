
import asyncHandler from "express-async-handler";
import { User } from '../models/User';
import { Request, Response } from 'express';
import { tokenize } from '../util/jwt';
import { authenticate } from '../util/did';
import console from "console";

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


// Login method with IOTA Identity
const userLoginDID = asyncHandler(async (req: Request, res: Response) => {

    const credential = req.body;

    console.log("credential", credential)

    let response: any = {}
    response = await authenticate(credential)
    console.log("response", response)

    if (response.result.verified) {

        // check if credential is new

        var issuanceDate = new Date(response.result.credential.issuanceDate).getTime();
        var nowDate = new Date().getTime();
        var withinRange = nowDate - issuanceDate

        console.log("issuanceDate", issuanceDate)
        console.log("nowDate", nowDate)
        console.log("withinRange", withinRange)

        if (withinRange <= 10000) {
            console.log("authenticate success!")

            const token: string = tokenize("user._id");
            res.json({
                token
            });
        } else {
            res.json({
                error: "credential to old"
            });
        }
    } else {
        res.status(403);
        throw new Error('Incorrect credential');
    }
});

export { userLogin, userLoginDID };
