export const selectContacts = state => {
  const contacts = state.contacts.data;
  const filter = state.filter.val;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
