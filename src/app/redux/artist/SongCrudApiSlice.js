import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songCrudApi = createApi({
  reducerPath: "songCrudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const authState = getState()?.auth;
      const token = authState?.token;
      console.log("token", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token.replace(/"/g, "")}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createTrack: builder.mutation({
      query: (trackData) => ({
        url: "/api/artist/track/create",
        method: "POST",
        body: trackData,
      }),
    }),
    editTrack: builder.mutation({
      query: (trackData) => ({
        url: "/api/artist/track/update",
        method: "POST",
        body: trackData,
      }),
    }),
    getAllAlbums: builder.query({
      query: () => `/api/artist/albums`,
    }),
    getSingleTrack: builder.query({
      query: (id) => `/api/artist/track/detail/${id}`,
    }),
    deleteTrack: builder.mutation({
      query: (trackId) => ({
        url: `/api/artist/track/delete`,
        method: "POST",
        body: { id: trackId },
      }),
    }),
  }),
});

export const {
  useCreateTrackMutation,
  useEditTrackMutation,
  useGetAllAlbumsQuery,
  useDeleteTrackMutation,
  useGetSingleTrackQuery,
} = songCrudApi;
