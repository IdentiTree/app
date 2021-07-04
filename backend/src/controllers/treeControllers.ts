import asyncHandler from 'express-async-handler';
import { Tree } from '../models/Tree';
import { Request, Response } from 'express';
import { getTreeCarbonCapture } from '../util/treeUtils';
import { trees as treesData } from '../data/sampleData/treeData';

/**
 * get all the areas
 *
 * @route   GET /api/trees
 * @return  array of all the trees
 */

const getAllTrees = asyncHandler(async (req: Request, res: Response) => {
    const trees = await Tree.find({});
    if (trees) {
        res.json(trees);
    } else {
        res.status(404);
        throw new Error('Unable to find trees');
    }
});

/**
 * create a new tree
 *
 * @route   POST /api/trees
 * @return  JSON of the created tree
 */

const createTree = asyncHandler(async (req: Request, res: Response) => {
    const { treeType, circumference, height, area, coordinate  }: any = req.body;
    const treeInfo: any = treesData.find((t: any) => t.id === treeType);
    const carbonCapture: number = getTreeCarbonCapture(treeType, height, circumference);

    const newTree = await Tree.create({
        treeType,
        circumference,
        height,
        area,
        coordinate,
        commonName: treeInfo.name,
        carbonCapture
    }).catch((error) => {
        res.status(400);
        throw new Error('unable to create tree, bad data');
    });

    res.json(newTree);
});

/**
 * Get tree types
 *
 * @route   GET /api/trees/types
 * @return  send the JSON of all the tree types
 */

const getTreeTypes = asyncHandler(async (req: Request, res: Response) => {
    res.json(treesData);
})

export { getAllTrees, createTree, getTreeTypes }
