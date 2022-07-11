import express from 'express';
import {getProducts, postProduct} from '../controllers/product.js';

const router = express.Router();

router.post("/products" , postProduct );
router.get("/products" , getProducts);

export default router;