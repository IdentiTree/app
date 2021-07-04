import { Area } from '../models/Area';
import { User } from '../models/User';
import asyncHandler from "express-async-handler";
import { Request, Response } from 'express';
import { estimateBiomeCarbonCapture } from '../util/treeUtils';
import { biomes as biomesData} from '../data/sampleData/biomeData';

/**
 * Get all areas
 * @route    GET /api/area
 * @return   all the areas
 */

const getAllAreas = asyncHandler(async (req: Request, res: Response) => {
    const areas = await Area.find({});
    if (areas) {
        res.json(areas)
    } else {
        res.status(404);
        throw new Error('Areas not found');
    }
});

/**
 * get area by ID
 *
 * @route   GET /api/area/id/:id
 * @return  Area Object
 */

const areaInfo = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const area: any = await Area.findById(id);
    if (area) {
        res.json({
            area
        });
    } else {
        res.status(400);
        throw new Error('Incorrect area ID');
    }
});

/**
 * Create a new area
 *
 * @route   POST /api/area/
 * @return  area JSON
 */

const createArea = asyncHandler(async (req: Request, res: Response) => {
    const { name, coordinates, area, biomes }: any = req.body;
    const user: any = await User.findOne({});
    const carbonCapture = estimateBiomeCarbonCapture(biomes, area);
    const landmass = await Area.create({
        name,
        coordinates,
        area,
        biomes,
        carbonCapture,
        owner: user._id
    }).catch((error: any) => {
        res.status(400);
        throw new Error('Bad request, missing data');
    });
    res.json(landmass);
});


/**
 * Get all the biome types
 *
 * @route   GET /api/area/types
 * @return  list of all the biomes
 */

const getBiomeTypes = asyncHandler(async (req: Request, res: Response) => {
    res.json(biomesData);
})

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



export { areaInfo, createArea, indexArea, getBiomeTypes, getAllAreas };
