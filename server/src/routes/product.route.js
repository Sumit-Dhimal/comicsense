import express from "express";
import { registerProduct, getProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post('/', registerProduct);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct)

export default router;