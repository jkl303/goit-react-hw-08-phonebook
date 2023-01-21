import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts, selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact contact={contact}></Contact>
            </li>
          );
        })}
      </ul>
      {isLoading && <b>Loading...</b>}
      {error && <b>{error}</b>}
    </>
  );
};
