import express from 'express';
import {
    walletInfo,
    walletBalance,
    walletAddress,
    walletInit
} from '../controllers/walletControllers';
const router = express.Router();

router.route('/init').post(walletInit);
router.route('/info').post(walletInfo);
router.route('/balance').post(walletBalance);
router.route('/address').post(walletAddress);

export default router;
