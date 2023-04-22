import { createReducer, on } from '@ngrx/store';
import { CategoriesState, Category } from 'src/app/models/Category.model';
import { CategoriesActions } from '../actions/categories.actions';

export const initialState: CategoriesState = {
  loading: false,
  categories: [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '3',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '4',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '5',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '6',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '7',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '8',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '9',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
    },
    {
      id: '10',
      img: './assets/imgs/boy.jpg',
      name: 'buso',
    },
    {
      id: '11',
      img: './assets/imgs/accesory.jpg',
      name: 'buso',
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
