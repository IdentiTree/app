import express from 'express';
import {
    getAllTrees,
    createTree,
    getTreeTypes
} from '../controllers/treeControllers';

const router = express.Router();

router.route('/')
    .get(getAllTrees)
    .post(createTree)

router.route('/types').get(getTreeTypes);

export default router;
