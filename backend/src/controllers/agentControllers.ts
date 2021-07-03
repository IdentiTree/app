
import { Agent } from '../models/Agent';
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";

import asyncHandler from "express-async-handler";
import { Request, Response } from 'express';


const agentInit = async () => {

    const agent: any = await Agent.findOne({ name: "Application Agent" });
    if (agent) {
        console.log("agent works!")
        return agent
    } else {
        console.log("Creating agent...")
        const DID_Data = await createDID();
        const encryptedPrivKey = encrypt(DID_Data.key.secret);
        const newAgent: any = await Agent.create({
            name: "Application Agent",
            did: DID_Data.did,
            key: {
                pub: DID_Data.key.public,
                priv: encryptedPrivKey
            }
        }).catch((error) => {
            console.log("error", error)
            console.error(`unable to create agentname ${agent.name}`);
        });
        newAgent ? console.log(`created new agent : ${newAgent._id}`) : null;
        return newAgent
    }
};
const agentInfo = asyncHandler(async (req: Request, res: Response) => {
    interface IUserLoginProps {
        username: string,
        password: string
    }

    const { username, password }: IUserLoginProps = req.body;

    const agent: any = await Agent.findOne({ name: "Application Agent" });

    if (agent) {
        res.json({
            agent
        });
    } else {
        res.status(403);
        throw new Error('Incorrect agent');
    }
});

export { agentInit, agentInfo };
