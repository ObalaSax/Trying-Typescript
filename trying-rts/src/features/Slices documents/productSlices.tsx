import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//My Product Details
export interface ProductData {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

interface CartState {
  cartItem: ProductData[];
}

const initialState: CartState = {
  cartItem: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    functionName: (state, action: PayloadAction<[]>) => {
      state.cartItem = action.payload;
    },
  },
});

export const { functionName } = productsSlice.actions;
export default productsSlice.reducer;
