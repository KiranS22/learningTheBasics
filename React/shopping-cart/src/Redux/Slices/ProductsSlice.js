import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      { id: 1, name: "watch", price: 20000, qty: 0 },
      { id: 2, name: "bag", price: 400000, qty: 0 },
      { id: 3, name: "shirt", price: 20, qty: 0 },
    ],
  },
  reducers: {},
});
export const selectProducts = (state) => state.products.products;
export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
