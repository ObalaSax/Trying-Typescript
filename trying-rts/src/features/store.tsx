import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./Slices documents/productSlices";
import { appApi } from "./API docs/apiConnect";
import { cartSlice } from "./Slices documents/cartSlice";

export const myStore = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    productsData: productsSlice,
    cartSlice: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
