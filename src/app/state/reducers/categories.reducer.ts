import { createReducer, on } from '@ngrx/store';
import { CategoriesState, Category } from 'src/app/models/Category.model';
import { CategoriesActions } from '../actions/categories.actions';

export const initialState: CategoriesState = {
  loading: false,
  categories: [
    {
      id: 'C1',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: 'C2',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: 'C3',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: 'A1',
      img: './assets/imgs/accesory.jpg',
      name: 'Otro',
    },
    {
      id: 'A2',
      img: './assets/imgs/accesory.jpg',
      name: 'Algo',
    },
    {
      id: 'A3',
      img: './assets/imgs/accesory.jpg',
      name: 'Algo',
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
    (_state, payload: Category): CategoriesState => {
      return { ..._state, categories: [..._state.categories, payload] };
    }
  ),
  on(
    CategoriesActions.updateCategory,
    (_state, payload: Category): CategoriesState => {
      const categories = [..._state.categories];
      const categoryIndex = categories.findIndex(
        (category) => category.id === payload.id
      );
      categories[categoryIndex] = payload;
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
