import express from 'express';
import {
    areaInfo, createArea, indexArea
} from '../controllers/areaControllers';
const router = express.Router();

router.route('/:id').get(areaInfo);
router.route('/').post(createArea);
router.route('/').get(indexArea);

export default router;
