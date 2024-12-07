import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  
  initialState: {
    allProducts: [],
  },

  reducers: {
    setAllProducts(state, action) {
      state.showedProducts.push(action.payload);
    },
    
    addProduct(state, action) {
      state.allProducts.push(action.payload);
    },

    remProductById(state, action) {
      const removeableProductId = action.payload;
      const newProducts = [];

      for (let i = 0; i < state.allProducts.length; ++i) {
        if (state.allProducts[i].id !== removeableProductId) {
          newProducts.push(state.allProducts[i]);
        }
      }

      state.allProducts = newProducts;
    }
  },
});

export const { setAllProducts, addProduct, remProductById } = productsSlice.actions;
export default productsSlice.reducer;
