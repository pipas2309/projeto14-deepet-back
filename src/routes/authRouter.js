import express from 'express';
import login from '../controllers/login.js';
import newUser from '../controllers/newUser.js';
import validateSignIn from '../middlewares/validateSignIn.js';
import validateSignUp from '../middlewares/validateSignUp.js';

const router = express.Router();

router.post("/sign-in", validateSignIn, login);
router.post("/sign-up", validateSignUp, newUser);

export default router;