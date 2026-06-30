import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.qty += item.qty;
      } else {
        state.items.push(item);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      // if qty > 1 decrease quantity
      // else remove the product from state
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.qty += 1;
      }
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;

      const item = state.items.find(
        (i) => i.id === id
      );

      if (item) {
        item.qty = qty;
      }
    }

  }
});

export const {
  addToCart,
  removeFromCart,
  decreaseQty,
  increaseQty,
  updateQty
} = cartSlice.actions;

export default cartSlice.reducer;