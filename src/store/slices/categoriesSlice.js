import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categoriesSlice",

  initialState: {
    selectedCategoryInd: 0,
    selectedSubCategoryInd: 0,
    selectedGender: "female",
    categories: {
      female: [],
      male: [],
    }
  },

  reducers: {
    addCategory(state, action) {
      const {gender, categoryName, categoryImg } = action.payload;
      state.categories[gender].push({name: categoryName, img: categoryImg, subCategories: []});
    },
    
    selectCategoryInd(state, action) {
      state.selectedCategoryInd = action.payload;
      state.selectedSubCategoryInd = 0;
    },

    selectSubCategoryInd(state, action) {
      state.selectedSubCategoryInd = action.payload;
    },

    selectGender(state, action) {
      state.selectedGender = action.payload;
    },

    remCategoryByInd(state, action) {
      const {gender, categoryInd } = action.payload;

      const newCategoryList = [];
      const removAbleCategoryInd = categoryInd;

      for (let i = 0; i < state[gender].categories.length; ++i) {
        if (i !== removAbleCategoryInd) {
          newCategoryList.push(state[gender].categories[i]);
        }
      }

      state[gender].categories = newCategoryList;
    },

    addSubCategoryByCategoryInd(state, action) {
      const {gender, categoryInd, subCategoryName } = action.payload;

      if (state.categories[gender][categoryInd]) {
        state.categories[gender][categoryInd].subCategories.push(subCategoryName);
      }
    },

    remSubCategoryByInd(state, action) {
      const {gender, categoryInd, removeAbleSubCategoryInd } = action.payload;

      if (state[gender].categories[categoryInd]) {
        const newSubCutegories = [];
        const currentsubCategories = state[gender].categories[categoryInd].subCategories;

        for (let i = 0; i < currentsubCategories.length; ++i) {
          if (i !== removeAbleSubCategoryInd) {
            newSubCutegories.push(currentsubCategories[i]);
          }
        }
        
        state[gender].categories[categoryInd].subCategories = newSubCutegories;
      }
    }
  }
});

export const {
  addCategory,
  selectCategoryInd,
  selectSubCategoryInd,
  selectGender,
  remCategoryByInd,
  addSubCategoryByCategoryInd,
  remSubCategoryByInd,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;