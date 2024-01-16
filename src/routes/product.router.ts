import { Router } from 'express';}
import { getProducts } from '../controllers/product.controller';

const router = Router();

// router.get('/products', getProducts);
router.get('/', getProducts);

export default router;