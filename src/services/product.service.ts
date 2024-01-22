import { Products, IProductAttributes } from '../models/product.model';

class ProductService {
  constructor() {}

  async getProduct() {
    return await Products.findAll();
  }

  async getProductById(id: number) {
    return await Products.findByPk(id);
  }

  async createProduct(product: IProductAttributes) {
    return await Products.create(product);
  }

  async updateProduct(id: number, product: IProductAttributes) {
    const productToUpdate = await Products.findByPk(id);
    if (!productToUpdate) {
      throw new Error('Product not found');
    }
    return await productToUpdate.update(product);
  }

  async deleteProduct(id: number) {
    const productToDelete = await Products.findByPk(id);
    if (!productToDelete) {
      throw new Error('Product not found');
    }
    return await productToDelete.destroy();
    // return await Products.destroy({
    //   where: { id },
    // });
  }
}

export default ProductService;
