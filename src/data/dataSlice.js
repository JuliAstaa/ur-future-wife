import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRecipes: [],
  selectedCategory: "All",
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setAllRecipes: (state, action) => {
      state.allRecipes = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setAllRecipes, setSelectedCategory } = recipeSlice.actions;
export default recipeSlice.reducer;

export const recommend = (state) => state.recipe.allRecipes;
export const getSelectedCategory = (state) => state.recipe.selectedCategory;
