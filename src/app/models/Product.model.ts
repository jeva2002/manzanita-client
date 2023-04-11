export interface Product {
  id: string;
  name: string;
  mainColor: string;
  price: string;
  sizes: string[];
  img: string;
}

export type ProductMiniature = Omit<Product, 'sizes'>;
