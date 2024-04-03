import { Router } from "express";
import { CreateProductController } from "../modules/products/useCases/CreateProduct/CreateProductController";

const createProductRoute = Router();

const createProductController = new CreateProductController();

createProductRoute.post("/", (request, response) => {
  return createProductController.handle(request, response);
});

export { createProductRoute };
