import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userLoginApi = createApi({
  reducerPath: 'userLoginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (loginData) => ({
        // url: '/api/customer/login',
        url: '/api/artist/login',
        method: 'POST',              
        body: loginData,               
      }),
    }),
  }),
});

// Export the hook for the mutation
export const { useLoginUserMutation } = userLoginApi;
