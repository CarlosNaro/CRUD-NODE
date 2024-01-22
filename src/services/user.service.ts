import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users, IUserAttributes } from '../models/user.model';

class UserService {
  constructor() {}

  async getUser() {
    return await Users.findAll();
  }

  async getUserById(id: number) {
    return await Users.findByPk(id);
  }

   
  async createUser(user: IUserAttributes) {
    const password = await bcrypt.hash(user.password, 5);
    console.log(":::antes de registrar user::", user, password);
    
    return await Users.create({ ...user, password });
  }

  async updateUser(id: number, user: IUserAttributes) {
    const userToUpdate = await Users.findByPk(id);
    if (!userToUpdate) {
      throw new Error('User not found');
    }
    return await userToUpdate.update(user);
  }

  async deleteUser(id: number) {
    const userToDelete = await Users.findByPk(id);
    if (!userToDelete) {
      throw new Error('User not found');
    }
    return await userToDelete.destroy();
    // return await Users.destroy({
    //   where: { id },
    // });
  }

  // loginUser usando la libreria jwt para generar el token
  async loginUser(email: string, password: string) {
    // verificar si el usuario existe
    
    const user:any = await Users.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    
    // verificar si la contraseña es correcta
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }

    // generar el jwt token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });
    console.log("token generado", token);
    console.log("user", user);
    
    const authenticated = {
      user:{
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: token
      
    }
    
    return { authenticated };
  }
}

export default UserService;
