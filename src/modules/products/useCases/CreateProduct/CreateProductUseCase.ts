import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/implemantation/IProductRepository";
import { IProduct, IProductCreate } from "../../interfaces";
import { AppError } from "../../../../errors/AppErrors";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute({
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProductCreate): Promise<IProduct> {
    const verifyCodigoProductExist =
      await this.productRepository.findByCodigoProduto(codigoProduto);

    if (codigoProduto.length === 0) {
      const codigoproduto =
        await this.productRepository.createUniqueCodigoProduto();
      if (codigoproduto) {
        codigoProduto = codigoproduto;
      } else {
        throw new AppError(
          "Gerador de Código deu Erro, Crie o produto novamente!",
          400,
        );
      }
    }

    const verifycodigoproduto =
      this.productRepository.checkfieldCodigoProduto(codigoProduto);

    if (!verifycodigoproduto) {
      throw new AppError(
        "Código do Produto precisa conter 12 caracteres!",
        400,
      );
    }

    if (verifyCodigoProductExist) {
      throw new AppError("Código do produto não está disponível!", 400);
    }

    const product = await this.productRepository.createProduct({
      nome: nome,
      descricao: descricao,
      preco: preco,
      codigoProduto: codigoProduto,
    });

    return product;
  }
}

export { CreateProductUseCase };
