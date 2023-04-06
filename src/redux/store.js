import { configureStore } from '@reduxjs/toolkit';
import authenticationApi from './auth-operations';
import { contactApi } from './contactsApi';
import { filterContacts } from './filterContacts';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterContacts.name]: filterContacts.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      contactApi.middleware,
      authenticationApi.middleware
    ),
});
