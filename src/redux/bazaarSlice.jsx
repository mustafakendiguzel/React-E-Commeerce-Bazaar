import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      console.log(action);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    deleteFromCart: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },

    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },

    addCategories: (state, action) => {
      state.categories = action.payload;
    },

    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  resetCart,
  incrementQuantity,
  addUser,
  removeUser,
  decrementQantity,
  addCategories,
  selectCategory,
} = bazarSlice.actions;
