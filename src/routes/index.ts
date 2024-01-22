import express from 'express';
import productRouter from './product.router';
import userRouter from './user.router';

const routerApi = (app: express.Application) => {
  const router = express.Router();
  
  app.use('/api/', router);
  router.use('/users', userRouter);
  router.use('/products', productRouter);
  
};

export default routerApi;
