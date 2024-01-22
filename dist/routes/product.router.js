"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
router
    .get('/', product_controller_1.default.getProducts)
    .get('/:id', product_controller_1.default.getProductById)
    .post('/', product_controller_1.default.createProduct)
    .put('/:id', product_controller_1.default.updateProduct)
    .delete('/:id', product_controller_1.default.deleteProduct);
exports.default = router;
