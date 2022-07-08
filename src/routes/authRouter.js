import express from 'express';
import newUser from '../controllers/newUser.js';
import validateSignUp from '../middlewares/validateSignUp.js';

const router = express.Router();


router.post("/sign-up", validateSignUp, newUser);

export default router;