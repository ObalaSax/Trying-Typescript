import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//The Base URL
const BASEURL = "https://dummyjson.com/";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = appApi;
