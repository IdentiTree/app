
import { Area } from '../models/Area';
import { encrypt } from "../util/crypto";
import { createDID } from "../util/did.js";

import asyncHandler from "express-async-handler";
import { Request, Response } from 'express';
import console from 'console';

const areaInfo = asyncHandler(async (req: Request, res: Response) => {

    const area: any = await Area.findOne({ name: "First Area" });

    if (area) {
        res.json({
            area
        });
    } else {
        res.status(403);
        throw new Error('Incorrect area name');
    }
});

const createArea = asyncHandler(async (req: Request, res: Response) => {
    console.log("createArea", req.body)
    const newAreaObj = new Area(req.body);
    newAreaObj.save(err => {
        if (err) return res.status(500).send(err);
        console.log("Area created!", newAreaObj)
        return res.status(200).send(newAreaObj);
    });

});
const indexArea = asyncHandler(async (req: Request, res: Response) => {
    const areas: any = await Area.find();

    if (areas) {
        res.json({
            areas
        });
    } else {
        res.status(403);
        throw new Error('Incorrect area name');
    }

});

export { areaInfo, createArea, indexArea };
