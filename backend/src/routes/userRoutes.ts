import express from 'express';
import {
    userLogin, 
    userLoginDID
} from '../controllers/userControllers';
const router = express.Router();

router.route('/login').post(userLogin);
router.route('/login_did').post(userLoginDID);

export default router;
