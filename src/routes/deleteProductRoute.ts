import { Router } from "express";
import { DeleteProductController } from "../modules/products/useCases/DeleteProduct/DeleteProductController";

const deleteProductRoute = Router();

const deleteProductController = new DeleteProductController();

deleteProductRoute.post("/", (request, response) => {
  return deleteProductController.handle(request, response);
});

export { deleteProductRoute };
