"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
class ProductService {
    constructor() { }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Products.findAll();
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Products.findByPk(id);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.Products.create(product);
        });
    }
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productToUpdate = yield product_model_1.Products.findByPk(id);
            if (!productToUpdate) {
                throw new Error('Product not found');
            }
            return yield productToUpdate.update(product);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productToDelete = yield product_model_1.Products.findByPk(id);
            if (!productToDelete) {
                throw new Error('Product not found');
            }
            return yield productToDelete.destroy();
            // return await Products.destroy({
            //   where: { id },
            // });
        });
    }
}
exports.default = ProductService;
