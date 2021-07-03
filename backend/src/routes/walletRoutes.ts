import express from 'express';
import {
    walletInfo,
    walletBalance,
    walletAddress
} from '../controllers/walletControllers';
const router = express.Router();

router.route('/info').post(walletInfo);
router.route('/balance').post(walletBalance);
router.route('/address').post(walletAddress);

export default router;