import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://connections-api.herokuapp.com';
const jwt = localStorage.getItem('jwt');

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: body => ({
        url: API_ENDPOINT,
        headers: { Authorization: jwt },
      }),
      providesTags: ['Contacts'],
    }),

    addContacts: builder.mutation({
      query: body => {
        return {
          url: API_ENDPOINT,
          method: 'POST',
          body,
          headers: { Authorization: `Bearer ${jwt}` },
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: 'DELETE',
          headers: { Authorization: `Bearer ${jwt}` },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
} = contactApi;
