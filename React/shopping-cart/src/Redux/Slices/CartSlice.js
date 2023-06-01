import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartCount: 0 },
  reducers: {
    addToCart: (state, action) => {
      console.log("add to cart reducer", action.payload);
      let { id } = action.payload;
      let existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        let updatedCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }

          return cartItem;
        });
        state.cart = updatedCart;
      } else {
        state.cart = [...state.cart, { ...action.payload, qty: 1 }];
      }
      state.cartCount++;
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((cItem) => {
        if (cItem.id === action.payload.id) {
          state.cartCount = state.cartCount - cItem.qty;
        }
        return cItem.id !== action.payload.id ;
      });
    },
  },
});

export const { addToCart, deleteFromCart } = CartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectCount = (state) => state.cart.cartCount;
export default CartSlice.reducer;
