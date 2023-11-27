import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
} from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
        state.isLoading = false;
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// Генератори екшенів
// export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
