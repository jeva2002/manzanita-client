export interface Product {
  id: string;
  name: string;
  color: string;
  price: string;
  sizes: string[];
  img: string;
  category: string;
}

export type ProductMiniature = Omit<Product, 'sizes' | 'category' | 'color'>;
