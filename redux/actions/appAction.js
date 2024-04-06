import axios from "axios";
import { server } from "../store";
import { setAllProducts, setCategories , setCategoriesHomeScreen , setProductData, setSelectedCategorie} from "../reducers/appReducer";


export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${server}/products/categories`);

    dispatch(setCategories(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchHomeScreenCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${server}/products/categories`);
    const categories = response.data.slice(0, 3);
    dispatch(setCategories(response.data))
    const categoriesWithDetails = await Promise.all(categories.map(async (category) => {
      const categoryResponse = await axios.get(`${server}/products/category/${category}`);
      return {
        name: category,
        details: categoryResponse.data
      };
    }));
    dispatch(setCategoriesHomeScreen(categoriesWithDetails));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const fetchOneCategorie = (category) => async (dispatch) => {
  try {
    const response = await axios.get(`${server}/products/category/${category}`);

    dispatch(setSelectedCategorie(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProductData = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${server}/products/${id}`);

    dispatch(setProductData(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getAllProducts = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${server}/products`);
    dispatch(setAllProducts(response.data.products));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


