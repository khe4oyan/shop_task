// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import showedProductsSlice from './slices/showedProductsSlice';

const store = configureStore({
  reducer: {
    showedProductsSlice,
  }
});

export default store;