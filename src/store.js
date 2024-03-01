import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./data/dataSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
  },
});
