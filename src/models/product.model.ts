import {Model ,DataTypes, Sequelize, Optional } from "sequelize";

interface ProductAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

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


class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    stock!: number;
    image!: string;
    status!: boolean;
    created_at!: Date;
    updated_at!: Date;
}


const productSchema = {
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
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};

export { Product, ProductAttributes, ProductCreationAttributes, productSchema };