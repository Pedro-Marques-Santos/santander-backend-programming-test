import { IProduct } from "../interfaces";
import { Product } from "../model";
import { IProductRepository } from "./implemantation/IProductRepository";

class ProductRepository implements IProductRepository {
  // async findById(id: string): Promise<boolean> {
  //   const result = await Product.findById(id);
  //   if (result) {
  //     return true;
  //   }
  //   if(!id.length === 24) {
  //     return false;
  //   }
  //   return false;
  // }

  async deleteProduct(id: string): Promise<IProduct | null> {
    if (id.length === 24) {
      const deleteproduct = await Product.findOneAndDelete({ _id: id });
      return deleteproduct;
    }
    return null;
  }

  async createProduct({
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProduct): Promise<IProduct> {
    const product = new Product({
      nome: nome,
      descricao: descricao,
      preco: preco,
      codigoProduto: codigoProduto,
    });

    const productResult = await product.save();

    return productResult;
  }

  async editProduct({
    id,
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProduct): Promise<boolean> {
    const newProduct = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      codigoProduto: codigoProduto,
    };

    if (id.length !== 24) {
      return false;
    }

    const result = await Product.findByIdAndUpdate(id, newProduct);

    if (result) {
      return true;
    }

    return false;
  }

  checkfieldCodigoProduto(codigoProduto: string): boolean {
    if (codigoProduto.length === 12) {
      return true;
    }
    return false;
  }

  generateCodigo(length: number): string {
    let result = "";
    const characters = "0123456789";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    return result;
  }

  async createUniqueCodigoProduto(): Promise<string | null> {
    let codigoProduto: string;
    let isUnique = false;

    while (!isUnique) {
      codigoProduto = this.generateCodigo(12);

      try {
        const existingProduct = await Product.findOne({ codigoProduto });

        if (!existingProduct) {
          isUnique = true;
          return codigoProduto;
        }
      } catch (error) {
        return null;
      }
    }

    return null;
  }

  async findByCodigoProduto(codigoProduto: string): Promise<IProduct | null> {
    const product = await Product.findOne<IProduct>({
      codigoProduto: codigoProduto,
    }).exec();
    return product;
  }

  async listAllProducts(): Promise<IProduct[]> {
    const allproducts = Product.find();

    return allproducts;
  }
}

export { ProductRepository };
