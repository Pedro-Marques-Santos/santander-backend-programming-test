import { container } from "tsyringe";
import { IProductRepository } from "../modules/products/repositories/implemantation/IProductRepository";
import { ProductRepository } from "../modules/products/repositories/ProductRepository";

container.registerSingleton<ProductRepository>(
  "ProductRepository",
  ProductRepository,
);
