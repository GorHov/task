import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  homeScreenCategories: [],
  userInfo: null,
  selectedCategory: null,
  productData: null,
  wishlist: [],
  allProducts: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoriesHomeScreen: (state, action) => {
      state.homeScreenCategories = action.payload;
    },
    setSelectedCategorie: (state, action) => {
      state.selectedCategory = action.payload.products;
    },
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.wishlist.some(item => item.id === product.id)) {
        state.wishlist.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.wishlist = state.wishlist.filter(item => item.id !== productId);
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  },
});

export const {
  setCategories,
  logout,
  userInfo,
  setCategoriesHomeScreen,
  setSelectedCategorie,
  setProductData,
  addToWishlist,
  removeFromWishlist,
  setAllProducts
} = appSlice.actions;

export default appSlice.reducer;
