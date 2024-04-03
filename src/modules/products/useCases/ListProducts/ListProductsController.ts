import { Response, Request } from "express";

import { container } from "tsyringe";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsController = container.resolve(ListProductsUseCase);

    const listproducts = await listProductsController.execute();

    return response.json({ listproducts });
  }
}

export { ListProductsController };
