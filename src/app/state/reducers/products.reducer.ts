import { createReducer, on } from '@ngrx/store';
import { ProductsState } from 'src/app/models/Product.model';
import { ProductsActions } from '../actions/products.actions';

export const initialState: ProductsState = {
  loading: false,
  products: {
    clothes: [
      {
        id: '1',
        img: './assets/imgs/boy.jpg',
        color: ['#123'],
        name: 'mameluco',
        price: '42021',
        sizes: ['1 mes'],
        category: '1',
      },
      {
        id: '2',
        img: './assets/imgs/boy.jpg',
        color: ['#456', '#123', '#225', '#432', '#a2e', '#a8b'],
        name: 'mameluco',
        price: '3512',
        sizes: ['1 mes', '5 años', '4 meses', '10 meses'],
        category: '1',
      },
      {
        id: '3',
        img: './assets/imgs/accesory.jpg',
        color: ['#789'],
        name: 'mameluco',
        price: '5000',
        sizes: ['1 mes'],
        category: '1',
      },
      {
        id: '4',
        img: './assets/imgs/boy.jpg',
        color: ['#abc'],
        name: 'mameluco',
        price: '500',
        sizes: ['1 mes'],
        category: '2',
      },
      {
        id: '5',
        img: './assets/imgs/boy.jpg',
        color: ['#bcd'],
        name: 'mameluco',
        price: '500',
        sizes: ['1 mes'],
        category: '2',
      },
      {
        id: '6',
        img: './assets/imgs/boy.jpg',
        color: ['#123'],
        name: 'mameluco',
        price: '150500',
        sizes: ['1 mes'],
        category: '3',
      },
      {
        id: '7',
        img: './assets/imgs/accesory.jpg',
        color: ['#123'],
        name: 'mameluco',
        price: '150500',
        sizes: ['1 mes'],
        category: '3',
      },
    ],
    accesories: [],
  },
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, (_state): ProductsState => {
    return { ..._state, loading: true };
  })
);
