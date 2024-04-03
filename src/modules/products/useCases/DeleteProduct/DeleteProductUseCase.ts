import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/implemantation/IProductRepository";
import { IProduct } from "../../interfaces";
import { AppError } from "../../../../errors/AppErrors";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<IProduct | null> {
    const deletedproduct = await this.productRepository.deleteProduct(id);

    if (!deletedproduct) {
      throw new AppError("Id do produto não encontrado!", 400);
    }

    return deletedproduct;
  }
}

export { DeleteProductUseCase };
