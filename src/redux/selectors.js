export const selectContacts = state => {
  const contacts = state.contacts.items;
  const filter = state.filter.val;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export const useContacts = state => state.contacts.items;
