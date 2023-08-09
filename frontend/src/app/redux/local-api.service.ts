import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterInterface } from '../interfaces';

export const AlioItApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    createUser: builder.mutation<CharacterInterface, { name: string }>({
      query: (params) => ({
        url: 'users/register',
        method: 'POST',
        body: params
      })
    }),
  }),
});


export const { useCreateUserMutation } = AlioItApi;