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

export const mealDetail = async (mealId) => {
  console.log(mealId);
  console.log(`${baseUrl}/lookup.php?i=${mealId}`);
  try {
    const response = await axios.get(`${baseUrl}/lookup.php?i=${mealId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
