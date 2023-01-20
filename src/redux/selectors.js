export const selectContacts = state => state.contacts;

export const selectFilteredContacts = state => {
  const contacts = state.contacts.items;
  const filter = state.filter.val;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
