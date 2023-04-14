export interface Product {
  id: string;
  name: string;
  color: string[];
  price: string;
  sizes: string[];
  img: string;
  category: string;
}

export interface ProductsState {
  loading: boolean;
  products: {
    clothes: ReadonlyArray<Product>;
    accesories: ReadonlyArray<Product>;
  };
}

export type ProductMiniature = Omit<Product, 'sizes' | 'category' | 'color'>;
