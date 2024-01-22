import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const productService = new ProductService();

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProduct();
    res.status(200).json(products);
  } catch (error: any ) {
    res.status(500).send(error.message);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(parseInt(id));
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.updateProduct(parseInt(id), req.body);
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.deleteProduct(parseInt(id));
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
