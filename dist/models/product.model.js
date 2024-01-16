"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.Product = void 0;
const sequelize_1 = require("sequelize");
const PRODUCT_TABLE = "products";
// class Products extends Model<ProductAttributes> {
//     static config(sequelize: Sequelize) {
//         return {
//             sequelize,
//             tableName: PRODUCT_TABLE,
//             modelName: 'Productos',
//             timestamps: true, // para poder habilitar los campos de createdAt y updatedAt
//         };
//     }
// }
class Product extends sequelize_1.Model {
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
