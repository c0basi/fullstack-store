import express from 'express';
import {
	getAllProducts,
	getProductById,
} from '../controller/productControllers.js';

const router = express.Router();

//@desc GET all products from db
//@route GET /api/products
//@acess Public
router.get('/', getAllProducts);

//@desc GET all products by id from db
//@route GET /api/products/:id
//@acess Public
router.get('/:id', getProductById);

export default router;
