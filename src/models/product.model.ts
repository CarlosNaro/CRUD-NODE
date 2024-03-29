import { Model, DataTypes } from 'sequelize';
import connection from '../db/connection.db';

export interface IProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  status: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const PRODUCT_TABLE = 'products';

class Products extends Model<IProductAttributes> {}

Products.init(
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
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  },
  {
    sequelize: connection,
    tableName: PRODUCT_TABLE,
    modelName: 'Products',
    timestamps: true,
  },
);

export { Products };