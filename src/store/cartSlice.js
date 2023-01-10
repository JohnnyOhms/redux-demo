import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  ShowCart: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    displayUserCartItems: (state, actions) => {
      console.log(actions);
      state.cartItems = [...state.cartItems, ...actions.payload];
      // state.totalQuantity = actions.payload;
    },
    addToCart: (state, actions) => {
      const newCartItem = actions.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newCartItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newCartItem.price;
      } else {
        state.cartItems.push({
          price: newCartItem.price,
          name: newCartItem.name,
          id: newCartItem.id,
          quantity: 1,
          totalPrice: newCartItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, actions) => {
      const id = actions.payload;
      const removedItem = state.cartItems.find((item) => item.id === id);
      if (removedItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        removedItem.quantity--;
        removedItem.totalPrice -= removedItem.price;
      }
      state.totalQuantity--;
    },
    ShowCart: (state) => {
      state.ShowCart = !state.ShowCart;
    },
  },
});

export const { ShowCart, addToCart, removeFromCart, displayUserCartItems } =
  CartSlice.actions;
export default CartSlice.reducer;
