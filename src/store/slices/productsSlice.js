import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  
  initialState: {
    allProducts: [
      {
        article: "A555",
        price: 2500,
        img: "https://cdn.prod.website-files.com/6177926b5641c2ccacfc1ad3/649568a7a8a62d807124e772_Jewelry%20as%20an%20Investment.webp",
        forGender: "female",
        categoryInd: 0,
        subCategoryInd: 0,
      }
    ],
  },

  reducers: {
    setAllProducts(state, action) {
      state.showedProducts.push(action.payload);
    },
  },
});

export const { setAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
