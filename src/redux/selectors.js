import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    const safeContacts = contacts || [];
    const safeFilter = filter ? filter.toLowerCase() : '';

    return safeContacts.filter(
      contact =>
        contact.name.toLowerCase().includes(safeFilter) ||
        (contact.number && contact.number.includes(safeFilter))
    );
  }
);
