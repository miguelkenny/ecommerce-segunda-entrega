import {createProductController,findProductsController,findProductByIdController, updateProductController, deleteProductByIdController} from './controller.js';
import { Router } from 'express';
import { verifyRol } from '../../middelware/verify_rol.js';

const productRouter = Router();

productRouter.post('/',verifyRol,createProductController);
productRouter.get('/',findProductsController);
productRouter.get('/:id',findProductByIdController);
productRouter.put('/:id',verifyRol,updateProductController);
productRouter.delete('/:id',verifyRol,deleteProductByIdController);

export default productRouter;