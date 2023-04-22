export interface Product {
  id: string;
  name: string;
  color: string[];
  price: string;
  sizes: string[];
  img: string;
  category: string;
}

export type CreateProductDTO = Omit<Product, 'id'>;
export type UpdateProductDTO = Omit<Partial<Product>, 'id'>;

export interface ProductsState {
  loading: boolean;
  products: ReadonlyArray<Product>;
}

export type ProductMiniature = Omit<Product, 'sizes' | 'category' | 'color'>;
