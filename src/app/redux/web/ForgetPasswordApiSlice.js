import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const forgetPasswordApi = createApi({
  reducerPath: 'forgetPasswordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    forgetPass: builder.mutation({
      query: (EmailData) => ({
        url: '/api/customer/forgot-password',
        method: 'POST',              
        body: EmailData,               
      }),
    }),
  }),
});

// Export the hook for the mutation
export const { useForgetPassMutation } = forgetPasswordApi;
