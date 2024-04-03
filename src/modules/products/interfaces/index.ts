export interface IProduct {
  id: string;
  nome: string;
  codigoProduto: string;
  descricao: string;
  preco: number;
}

export interface IProductCreate {
  nome: string;
  descricao: string;
  preco: number;
  codigoProduto: string;
}
