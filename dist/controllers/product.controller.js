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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../services/product.service"));
const productService = new product_service_1.default();
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService.getProduct();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productService.getProductById(parseInt(id));
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService.createProduct(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productService.updateProduct(parseInt(id), req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield productService.deleteProduct(parseInt(id));
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.default = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
