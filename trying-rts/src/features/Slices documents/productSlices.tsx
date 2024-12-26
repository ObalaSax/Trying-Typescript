import { createSlice } from "@reduxjs/toolkit";

//My Product Details
export interface ProductData {
  id: number;
  title: string;
}

const initialState: ProductData = {
  id: 0,
  title: "Not Found",
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {},
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
