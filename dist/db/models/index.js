'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.setUpModels = void 0;
const product_model_1 = require('./product.model');
const setUpModels = (sequelize) => {
  product_model_1.Product.init(product_model_1.productSchema, product_model_1.Product.config(sequelize));
};
exports.setUpModels = setUpModels;
