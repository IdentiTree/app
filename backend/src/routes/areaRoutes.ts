import express from 'express';
import {
    areaInfo, createArea, indexArea, getAllAreas, getBiomeTypes
} from '../controllers/areaControllers';
const router = express.Router();

router.route('/id/:id').get(areaInfo);
router.route('/')
    .post(createArea)
    .get(getAllAreas)
router.route('/types').get(getBiomeTypes)

export default router;
