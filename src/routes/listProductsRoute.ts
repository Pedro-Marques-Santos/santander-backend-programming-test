import { Router } from "express";
import { ListProductsController } from "../modules/products/useCases/ListProducts/ListProductsController";

const listProductsRoute = Router();

const listProductsController = new ListProductsController();

listProductsRoute.get("/", (request, response) => {
  return listProductsController.handle(request, response);
});

export { listProductsRoute };
