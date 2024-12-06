import { createSlice } from "@reduxjs/toolkit";

const showedProductsSlice = createSlice({
  name: "showedProductsSlice",
  initialState: {
    showedProducts: [],
  },
  reducers: {
    addProduct(state, action) {
      state.showedProducts.push(action.payload);
    },
  }, 
});

export const {addProduct} = showedProductsSlice.actions;
export default showedProductsSlice.reducer;