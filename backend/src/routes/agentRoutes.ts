import express from 'express';
import {
    agentInfo
} from '../controllers/agentControllers';
const router = express.Router();

router.route('/info').get(agentInfo);

export default router;
