import { Response, Request } from "express";

import { container } from "tsyringe";
import { EditProductUseCase } from "./EditProductUseCase";

class EditProductController {
  async handle(request: Request, response: Response) {
    const { id, nome, descricao, preco, codigoProduto } = request.body;

    const editProductUseCase = container.resolve(EditProductUseCase);

    const editproduct = await editProductUseCase.execute({
      id,
      nome,
      descricao,
      preco,
      codigoProduto,
    });

    return response.status(200).send();
  }
}

export { EditProductController };
