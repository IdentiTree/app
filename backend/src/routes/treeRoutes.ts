import express from 'express';
import {
    getAllTrees,
    createTree
} from '../controllers/treeControllers';

const router = express.Router();

router.route('/')
    .get(getAllTrees)
    .post(createTree)

export default router;
