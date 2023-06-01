import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/CartSlice";
import productsReducer from "../Slices/ProductsSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
});

export default store;
/*Move products to a slice and add feature to delete product from */
