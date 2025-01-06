import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "https://dummyjson.com/";
export const DataApi = createApi({
  reducerPath: "DataApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});
