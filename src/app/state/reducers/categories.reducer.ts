import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from '../actions/products.actions';
import { CategoriesState } from 'src/app/models/Category.model';

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
  on(ProductsActions.getProducts, (_state): CategoriesState => {
    return { ..._state, loading: true };
  })
);
