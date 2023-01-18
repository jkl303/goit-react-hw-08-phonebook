import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
};
