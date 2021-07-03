import express from 'express';
import {
    userLogin
} from '../controllers/userControllers';
const router = express.Router();

router.route('/login').post(userLogin);

export default router;
