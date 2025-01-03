import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "./productSlices";

//Extends
interface CartItems extends ProductData {
  quantity: number;
}

interface CartState {
  items: CartItems[];
}

const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItems) {
        //if the Item is in the cart, increment the Quantity
        existingItems.quantity++;
      } else {
        //if the Item is not in the cart, add quanntity by 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
