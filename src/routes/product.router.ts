import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();
router
  .get('/', productController.getProducts)
  .get('/:id', productController.getProductById)
  .post('/', productController.createProduct)
  .put('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

export default router;
