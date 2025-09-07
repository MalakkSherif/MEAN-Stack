import express from 'express';
import * as userController from '../controllers/user.controller.js'
import verifyToken from '../middlewares/verifyToken.js';


let router = express.Router()

router.route('/')
        .get(userController.getAllUsers)

router.route('/register')
        .post(userController.register)

router.route('/login')
        .post(verifyToken,userController.login);

export default router;
