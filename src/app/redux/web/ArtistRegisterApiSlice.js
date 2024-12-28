import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistRegisterApi = createApi({
  reducerPath: "artistRegisterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    registerArtist: builder.mutation({
      query: (artistData) => ({
        url: "/api/artist/register",
        method: "POST",
        body: artistData,
      }),
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

export const { useRegisterArtistMutation, useGetGenresQuery } =
  artistRegisterApi;
