import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductData } from "../Slices documents/productSlices";

//The Base URL
const BASEURL = "https://dummyjson.com/";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductData[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = appApi;
