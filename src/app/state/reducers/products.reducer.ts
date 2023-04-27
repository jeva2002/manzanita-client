import { createReducer, on } from '@ngrx/store';
import {
  CreateProductDTO,
  Product,
  ProductsState,
  UpdateProductDTO,
} from 'src/app/models/Product.model';
import { ProductsActions } from '../actions/products.actions';

export const initialState: ProductsState = {
  loading: false,
  products: [
    {
      id: '1',
      img: './assets/imgs/boy.jpg',
      color: ['#123'],
      name: 'mameluco',
      price: '42021',
      sizes: ['1 mes'],
      category: 'C1',
    },
    {
      id: '2',
      img: './assets/imgs/boy.jpg',
      color: ['#456', '#123', '#225', '#432', '#a2e', '#a8b'],
      name: 'mameluco',
      price: '3512',
      sizes: ['1 mes', '5 años', '4 meses', '10 meses'],
      category: 'C1',
    },
    {
      id: '3',
      img: './assets/imgs/accesory.jpg',
      color: ['#789'],
      name: 'mameluco',
      price: '5000',
      sizes: ['1 mes'],
      category: 'A1',
    },
    {
      id: '4',
      img: './assets/imgs/boy.jpg',
      color: ['#abc'],
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
      category: 'C2',
    },
    {
      id: '5',
      img: './assets/imgs/boy.jpg',
      color: ['#bcd'],
      name: 'mameluco',
      price: '500',
      sizes: ['1 mes'],
      category: 'C2',
    },
    {
      id: '6',
      img: './assets/imgs/boy.jpg',
      color: ['#123'],
      name: 'mameluco',
      price: '150500',
      sizes: ['1 mes'],
      category: 'C3',
    },
    {
      id: '7',
      img: './assets/imgs/accesory.jpg',
      color: ['#123'],
      name: 'mameluco',
      price: '150500',
      sizes: ['1 mes'],
      category: 'A3',
    },
  ],
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, (_state): ProductsState => {
    return { ..._state, loading: true };
  }),
  on(
    ProductsActions.addProduct,
    (_state, payload: CreateProductDTO): ProductsState => {
      return {
        ..._state,
        products: [..._state.products, { ...payload, id: '1516' }],
      };
    }
  ),
  on(
    ProductsActions.updateProduct,
    (_state, payload: UpdateProductDTO): ProductsState => {
      const products = [..._state.products] as Product[];

      const index = products.findIndex((product) => product.id === payload.id);
      products[index] = {
        id: products[index].id,
        category: payload.category ?? products[index].category,
        color: payload.color ?? products[index].color,
        img: payload.img ?? products[index].img,
        name: payload.name ?? products[index].name,
        price: payload.price ?? products[index].price,
        sizes: payload.sizes ?? products[index].sizes,
      };

      return {
        ..._state,
        products,
      };
    }
  ),
  on(
    ProductsActions.deleteProduct,
    (_state, payload: { id: string }): ProductsState => {
      return {
        ..._state,
        products: _state.products.filter(
          (product) => product.id !== payload.id
        ),
      };
    }
  )
);
