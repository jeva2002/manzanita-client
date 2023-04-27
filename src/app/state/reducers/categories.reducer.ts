import { createReducer, on } from '@ngrx/store';
import {
  CategoriesState,
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from 'src/app/models/Category.model';
import { CategoriesActions } from '../actions/categories.actions';

export const initialState: CategoriesState = {
  loading: false,
  categories: [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
      productType: 'C',
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
      productType: 'C',
    },
    {
      id: '3',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
      productType: 'C',
    },
    {
      id: '4',
      img: './assets/imgs/accesory.jpg',
      name: 'Otro',
      productType: 'A',
    },
    {
      id: '5',
      img: './assets/imgs/accesory.jpg',
      name: 'Algo',
      productType: 'A',
    },
    {
      id: '6',
      img: './assets/imgs/accesory.jpg',
      name: 'Algo',
      productType: 'A',
    },
  ],
};

export const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.getCategories, (_state): CategoriesState => {
    return { ..._state, loading: false };
  }),
  on(
    CategoriesActions.addCategory,
    (_state, payload: CreateCategoryDTO): CategoriesState => {
      return {
        ..._state,
        categories: [
          ..._state.categories,
          {
            id: '151315',
            ...payload,
          },
        ],
      };
    }
  ),
  on(
    CategoriesActions.updateCategory,
    (_state, payload: UpdateCategoryDTO): CategoriesState => {
      const categories = [..._state.categories];
      const categoryIndex = categories.findIndex(
        (category) => category.id === payload.id
      );

      categories[categoryIndex] = {
        ...categories[categoryIndex],
        ...payload,
      };
      return { ..._state, categories };
    }
  ),
  on(
    CategoriesActions.deleteCategory,
    (_state, payload: { id: string }): CategoriesState => {
      return {
        ..._state,
        categories: [
          ..._state.categories.filter((category) => category.id !== payload.id),
        ],
      };
    }
  )
);
