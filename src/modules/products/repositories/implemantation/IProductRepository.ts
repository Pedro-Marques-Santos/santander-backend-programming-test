import { IProduct, IProductCreate } from "../../interfaces";

interface IProductRepository {
  checkfieldCodigoProduto(codigoProduto: string): boolean;
  createProduct({
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProductCreate): Promise<IProduct>;
  findByCodigoProduto(codigoProduto: string): Promise<IProduct | null>;
  listAllProducts(): Promise<IProduct[]>;
  deleteProduct(id: string): Promise<IProduct | null>;
  generateCodigo(length: number): string;
  createUniqueCodigoProduto(): Promise<string | null>;
  editProduct({
    id,
    nome,
    descricao,
    preco,
    codigoProduto,
  }: IProduct): Promise<boolean>;
  // findById(id: string): Promise<boolean>;
}

export { IProductRepository };
