import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => "/api/customer/subscriptions",
      transformResponse: (response) =>
        response.data.map((subscriptions) => ({
          id: subscriptions.id,
          name: subscriptions.name,
        })),
    }),
    getGenres: builder.query({
      query: () => "/api/customer/genres",
      transformResponse: (response) =>
        response.data.map((genre) => ({
          id: genre.id,
          name: genre.name,
        })),
    }),
  }),
});

export const { useGetSubscriptionsQuery, useGetGenresQuery } = publicApi;
