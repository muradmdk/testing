import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createAlbumApi = createApi({
  reducerPath: "createAlbumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const authState = getState()?.auth;
      const token = authState?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token.replace(/"/g, "")}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createAlbum: builder.mutation({
      query: (artistData) => ({
        url: "/api/artist/albums/create",
        method: "POST",
        body: artistData,
      }),
    }),
    updateAlbum: builder.mutation({
      query: (albumData) => {
        // console.log("Updating album with ID:", id); // Log the album ID
        console.log("Album data:", albumData); // Log the album data
        const id = albumData.get("id");
        return {
          url: `/api/artist/albums/update/${id}`,
          method: "POST",
          body: albumData,
        };
      },
    }),
    getSubscriptionLevel: builder.query({
      query: () => "/api/customer/subscriptions",
      transformResponse: (response) =>
        response.data.map((subLevel) => ({
          id: subLevel.id,
          name: subLevel.name,
        })),
    }),
    getSingleAlbum: builder.query({
      query: (id) => `/api/artist/albums/${id}`,
    }),
    getAllAlbums: builder.query({
      query: () => `/api/artist/albums`,
    }),
  }),
});

export const {
  useCreateAlbumMutation,
  useUpdateAlbumMutation,
  useGetSubscriptionLevelQuery,
  useGetSingleAlbumQuery,
  useGetAllAlbumsQuery,
} = createAlbumApi;
