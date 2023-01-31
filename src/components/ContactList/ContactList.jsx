import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectContacts,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  Notify.init({
    position: 'center-top',
    closeButton: false,
    fontSize: '16px',
    info: {
      background: 'darkcyan',
    },
    failure: {
      background: 'purple',
    },
  });

  error && Notify.failure(`${error}`);

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
      {isLoading && <Loader />}
    </>
  );
};
