import { Router } from "express";
import { createProductRoute } from "./createProductRoute";
import { listProductsRoute } from "./listProductsRoute";
import { deleteProductRoute } from "./deleteProductRoute";
import { editProductRoute } from "./editProductRoute";

const routes = Router();

routes.use("/createproduct", createProductRoute);

routes.use("/listproducts", listProductsRoute);

routes.use("/deleteproduct", deleteProductRoute);

routes.use("/editproduct", editProductRoute);

export { routes };
