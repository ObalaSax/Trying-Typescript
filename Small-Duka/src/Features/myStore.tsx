import { configureStore } from "@reduxjs/toolkit";
import { DataApi } from "./Slices/DataApiSlice";
import { cartReducer } from "./Slices/cartSlice";

export const myStore = configureStore({
  reducer: {
    [DataApi.reducerPath]: DataApi.reducer,
    cart: cartReducer.reducer,
  },
  //This Middleware Code is Verry Important
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(DataApi.middleware),
});

export type myRootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
