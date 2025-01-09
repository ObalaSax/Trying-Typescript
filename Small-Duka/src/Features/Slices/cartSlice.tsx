import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsData } from "./DataApiSlice";

export interface CartItem extends ProductsData {
  cartQuantity: number;
}
export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsData>) => {
      //CODE
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.cartQuantity++;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
