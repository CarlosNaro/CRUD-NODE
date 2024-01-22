import { Request, Response } from 'express';
import UserService from '../services/user.service';

const userService = new UserService();

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUser();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(parseInt(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUser(parseInt(id), req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(parseInt(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

// crear el  loginUserCtrl
const loginUserCtrl = async (req: Request, res: Response) => {
  try {
    console.log(":::req.body::", req.body);
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};



export default { getUsers, getUserById, createUser, updateUser, deleteUser, loginUserCtrl };
