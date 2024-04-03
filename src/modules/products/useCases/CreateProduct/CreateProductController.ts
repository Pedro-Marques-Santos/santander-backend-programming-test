import { Response, Request } from "express";

import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const { nome, descricao, preco, codigoProduto } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      nome,
      descricao,
      preco,
      codigoProduto,
    });

    return responde.json({ product });
  }
}

export { CreateProductController };
