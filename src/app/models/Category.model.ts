export interface Category {
  id: string;
  img: string;
  name: string;
}

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
}
