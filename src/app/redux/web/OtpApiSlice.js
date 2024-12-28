import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const optApi = createApi({
  reducerPath: 'optApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    OtpVarify: builder.mutation({
      query: (EmailData) => ({
        url: '/api/customer/verify-otp',
        method: 'POST',              
        body: EmailData,               
      }),
    }),
  }),
});

// Export the hook for the mutation
export const { useOtpVarifyMutation } = optApi;
