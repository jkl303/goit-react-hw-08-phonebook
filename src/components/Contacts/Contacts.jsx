import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactsStyled } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsStyled>
      <div>
        <h2>Add contact</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Your contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </ContactsStyled>
  );
};
