// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// example of importing the slice
// import counterReducer from './counterSlice';
import productReducer from '../store/slices/productSlice';

const productPersistConfig = {
  key: 'transactionDetails',
  storage,
};
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);
export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
