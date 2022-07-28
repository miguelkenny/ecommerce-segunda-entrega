import { Router } from 'express';
import productRouter from '../components/product/routes.js';
import cartRouter from '../components/cart/routes.js';

const router = Router();

router.use('/productos', productRouter);
router.use('/carrito', cartRouter);

export default router;