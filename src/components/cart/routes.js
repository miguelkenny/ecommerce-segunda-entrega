import {createShoppinCartController,findShoppingCartsController,findShoppingCartByIdController,deleteShoppingCartController,deleteShoppingCartProductController,insertProductInCartProductController} from './controller.js';
import { Router } from 'express';
import { verifyRol } from '../../middelware/verify_rol.js';

const cartRouter = Router();

cartRouter.post('/',verifyRol,createShoppinCartController);
cartRouter.post('/:id/productos',verifyRol,insertProductInCartProductController);
cartRouter.get('/',findShoppingCartsController);
cartRouter.get('/:id/productos',findShoppingCartByIdController);
cartRouter.delete('/:id',verifyRol,deleteShoppingCartController);
cartRouter.delete('/:id/productos/:id_prod',verifyRol,deleteShoppingCartProductController);

export default cartRouter;