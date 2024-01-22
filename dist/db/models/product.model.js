'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.productSchema = exports.Product = void 0;
const sequelize_1 = require('sequelize');
//export interface ProductCreationAttributes extends Optional<IProductAttributes, 'id'> {}
const PRODUCT_TABLE = 'products';
class Product extends sequelize_1.Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: true,
      //underscored: true,
      //createdAt: 'created_at',
      //updatedAt: 'updated_at',
    };
  }
}
exports.Product = Product;
const productSchema = {
  id: {
    type: sequelize_1.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: sequelize_1.DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: sequelize_1.DataTypes.STRING(50),
    allowNull: false,
  },
  price: {
    type: sequelize_1.DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: sequelize_1.DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: sequelize_1.DataTypes.STRING(50),
    allowNull: false,
  },
  status: {
    type: sequelize_1.DataTypes.BOOLEAN,
    allowNull: false,
  },
  created_at: {
    type: sequelize_1.DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: sequelize_1.DataTypes.DATE,
    allowNull: false,
  },
};
exports.productSchema = productSchema;
