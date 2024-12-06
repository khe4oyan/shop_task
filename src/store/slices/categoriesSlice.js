import { createSlice } from "@reduxjs/toolkit";
import Categories from "../../components/Categories";

const categoriesSlice = createSlice({
  name: "categoriesSlice",

  initialState: {
    selectedCategoryInd: 0,
    selectedSubCategoryInd: 0,
    selectedGender: "female",
    categories: {
      female: [
        {
          categoryName: "Кольцо",
          bannerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99Zd_lLcd6hMADt4xndnUcseq1_UsVNegzw&s",
          subcategories: ["Кольцо", "Обручальное", "Кольца Кастеты", "Коктейльные", "Помолвочные"],
        },
        {
          categoryName: "Колье",
          bannerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99Zd_lLcd6hMADt4xndnUcseq1_UsVNegzw&s",
          subcategories: ["суб категория"],
        },
      ],
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

      if (state[gender].categories[categoryInd]) {
        state[gender].categories[categoryInd].subcategories.push(subCategoryName);
      }
    },

    remSubCategoryByInd(state, action) {
      const {gender, categoryInd, removeAbleSubCategoryInd } = action.payload;

      if (state[gender].categories[categoryInd]) {
        const newSubCutegories = [];
        const currentSubCategories = state[gender].categories[categoryInd].subcategories;

        for (let i = 0; i < currentSubCategories.length; ++i) {
          if (i !== removeAbleSubCategoryInd) {
            newSubCutegories.push(currentSubCategories[i]);
          }
        }
        
        state[gender].categories[categoryInd].subcategories = newSubCutegories;
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