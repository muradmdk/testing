import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ResetPasswordApi = createApi({
  reducerPath: 'ResetPasswordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    ResetPassword: builder.mutation({
      query: (resetData) => ({
        url: '/api/customer/reset-password',
        method: 'POST',              
        body: resetData,               
      }),
    }),
  }),
});

// Export the hook for the mutation
export const { useResetPasswordMutation } = ResetPasswordApi;
