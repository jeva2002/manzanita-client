export interface Category {
  id: string;
  img: string;
  name: string;
}

export type CreateCategoryDTO = Omit<Category, 'id'>;
export type UpdateCategoryDTO = Omit<Partial<Category>, 'id'>;

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
}
