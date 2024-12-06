// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';

const store = configureStore({
  reducer: {
    categoriesSlice,
    productsSlice,
  }
});

export default store;