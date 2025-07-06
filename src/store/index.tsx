// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// example of importing the slice
// import counterReducer from './counterSlice';
import productReducer from '../store/slices/productSlice';
import cartReducer from '../store/slices/cartSlice';

const productPersistConfig = {
  key: 'transactionDetails',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
