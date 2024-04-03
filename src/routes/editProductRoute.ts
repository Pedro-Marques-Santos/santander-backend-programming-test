import { Router } from "express";
import { EditProductController } from "../modules/products/useCases/EditProduct/EditProductController";

const editProductRoute = Router();

const editProductController = new EditProductController();

editProductRoute.post("/", (request, response) => {
  return editProductController.handle(request, response);
});

export { editProductRoute };
