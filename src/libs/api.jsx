import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL_API;

export const allRecipes = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
