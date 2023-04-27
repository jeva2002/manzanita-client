export interface Category {
  id: string;
  img: string;
  name: string;
}

export type CreateCategoryDTO = Omit<Category, 'id'>;
export interface UpdateCategoryDTO extends Omit<Partial<Category>, 'id'> {
  id: string;
}

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
}
