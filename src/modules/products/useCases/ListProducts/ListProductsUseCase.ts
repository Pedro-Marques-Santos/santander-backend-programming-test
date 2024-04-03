import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/implemantation/IProductRepository";
import { IProduct } from "../../interfaces";

@injectable()
class ListProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(): Promise<IProduct[]> {
    const listAllProducts = this.productRepository.listAllProducts();

    return listAllProducts;
  }
}

export { ListProductsUseCase };
