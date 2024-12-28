import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userRegisterApi = createApi({
  reducerPath: 'userRegisterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/api/customer/register',
        method: 'POST',              
        body: userData,               
      }),
    }),
  }),
});

// Export the hook for the mutation
export const { useRegisterUserMutation } = userRegisterApi;
