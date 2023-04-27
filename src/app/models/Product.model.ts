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

export interface UpdateProductDTO extends Partial<Omit<Product, 'id'>> {
  id: string;
}

export interface ProductsState {
  loading: boolean;
  products: ReadonlyArray<Product>;
}

export type ProductMiniature = Omit<Product, 'sizes' | 'category' | 'color'>;
