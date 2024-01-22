import { Model, DataTypes } from 'sequelize';
import connection from '../db/connection.db';

export interface IUserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  //created_at?: Date;
  //updated_at?: Date;
}

const USER_TABLE = 'users';

class Users extends Model<IUserAttributes> {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: true ,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: connection,
    tableName: USER_TABLE,
    modelName: 'Users',
    timestamps: true,
    //createdAt: 'created_at',
    //updatedAt: 'updated_at',
  },
);

export { Users };
