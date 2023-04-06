import { createSlice } from '@reduxjs/toolkit';

export const filterContacts = createSlice({
  name: 'filter',
  initialState: { filter: '' },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterContacts.actions;
export const getFilterContacts = state => state.filter.filter;
