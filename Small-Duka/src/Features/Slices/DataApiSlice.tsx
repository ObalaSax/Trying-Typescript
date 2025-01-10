import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductsData {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
}
const BASE_URL = "https://dummyjson.com/";
export const DataApi = createApi({
  reducerPath: "DataApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<ProductsData[], void>({
      query: () => "users",
    }),
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllUsersQuery } = DataApi;
