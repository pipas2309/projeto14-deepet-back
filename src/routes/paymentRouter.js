import express from 'express';
import checkout from '../controllers/checkout.js';
import tokenValidation from '../middlewares/validateToken.js';

const router = express.Router();

router.post("/" , tokenValidation, checkout );

export default router;