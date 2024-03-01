import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRecipes: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setAllRecipes: (state, action) => {
      state.allRecipes = action.payload;
    },
  },
});

export const { setAllRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;

export const recommend = (state) => state.recipe.allRecipes;
