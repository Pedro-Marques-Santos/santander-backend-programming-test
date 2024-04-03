import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/implemantation/IProductRepository";
import { IProduct } from "../../interfaces";
import { AppError } from "../../../../errors/AppErrors";

@injectable()
class EditProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute({
    id,
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProduct): Promise<void> {
    const verifycodigoproduto =
      this.productRepository.checkfieldCodigoProduto(codigoProduto);

    if (!verifycodigoproduto) {
      throw new AppError(
        "Código do Produto precisa conter 12 caracteres!",
        400,
      );
    }

    const editprodut = await this.productRepository.editProduct({
      id,
      nome,
      descricao,
      preco,
      codigoProduto,
    });

    if (!editprodut) {
      throw new AppError("Id do produto inválido!", 400);
    }
  }
}

export { EditProductUseCase };
