import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const allRecipes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/random.php`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const filteredRecipe = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const mealDetail = async (mealId) => {
  try {
    const response = await axios.get(`${baseUrl}/lookup.php?i=${mealId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const categories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/categories.php`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchRecipe = async (keyword) => {
  try {
    const respone = await axios.get(`${baseUrl}/search.php?s=${keyword}`);
    return respone.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
