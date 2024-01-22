import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();
router
  .get('/', userController.getUsers)
  .get('/:id', userController.getUserById)
  .post('/login', userController.loginUserCtrl)
  .post('/', userController.createUser)
  .put('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser);


export default router;
