
import asyncHandler from "express-async-handler";
import { Request, Response } from 'express';
const { exec } = require("child_process");

const walletInfo = asyncHandler(async (req: Request, res: Response) => {
    exec("./cli-wallet server-status", (error: string, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error}`);
            res.json({
                status: "ERROR",
                message: error
            });
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.json({
                status: "ERROR",
                message: stderr
            });
        }
        console.log(`stdout: ${stdout}`);
        res.json({
            status: "OK",
            message: stdout
        });
    });
});

const walletBalance = asyncHandler(async (req: Request, res: Response) => {
    exec("./cli-wallet balance", (error: string, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error}`);
            res.json({
                status: "ERROR",
                message: error
            });
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.json({
                status: "ERROR",
                message: stderr
            });
        }
        console.log(`stdout: ${stdout}`);
        res.json({
            status: "OK",
            message: stdout
        });
    });
});
const walletAddress = asyncHandler(async (req: Request, res: Response) => {
    exec("./cli-wallet address -receive", (error: string, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error}`);
            res.json({
                status: "ERROR",
                message: error
            });
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.json({
                status: "ERROR",
                message: stderr
            });
        }
        console.log(`stdout: ${stdout}`);
        res.json({
            status: "OK",
            message: stdout
        });
    });
});

export { walletInfo, walletBalance, walletAddress };
