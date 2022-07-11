import express from 'express';
import {getCart, postCart} from '../controllers/cart.js';
import tokenValidation from '../middlewares/validateToken.js';

const router = express.Router();

router.post("/" , tokenValidation, postCart );
router.get("/" , tokenValidation, getCart);

export default router;