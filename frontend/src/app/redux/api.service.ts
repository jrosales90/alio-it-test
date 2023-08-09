import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterQueryParams, CharacterRequestInterface } from '../interfaces';

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterRequestInterface, CharacterQueryParams>({
      query: (params) => {
        let url = 'character/';
        const queryParams = new URLSearchParams();

        if (params.name) queryParams.append('name', params.name);

        if (queryParams.toString()) {
          url += `?${queryParams.toString()}`;
        }
        console.log(url);
        return url;
      },
    }),
  }),
});


export const { useGetCharactersQuery } = pokemonApi;