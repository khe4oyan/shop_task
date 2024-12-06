import { createSlice } from "@reduxjs/toolkit";

let productIdCounter = 2;
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
      console.log("#1", productIdCounter++);
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
