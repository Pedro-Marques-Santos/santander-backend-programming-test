import mongoose from "mongoose";
import { IProduct } from "../interfaces";

const ProductSchema = new mongoose.Schema<IProduct>({
  nome: String,
  codigoProduto: { type: String, unique: true },
  descricao: String,
  preco: Number,
});

const Product = mongoose.model("products", ProductSchema);

export { Product };
