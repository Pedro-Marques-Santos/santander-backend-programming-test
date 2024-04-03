import { Response, Request } from "express";

import { container } from "tsyringe";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProductUseCase = container.resolve(DeleteProductUseCase);
    await deleteProductUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteProductController };
