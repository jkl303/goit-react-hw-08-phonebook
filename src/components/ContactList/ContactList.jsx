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
import { ContactListStyled } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error && Notify.failure(`${error}`);

  return (
    <>
      <ContactListStyled>
        {contacts.map(contact => {
          return (
            <li key={contact._id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ContactListStyled>
      {isLoading && <Loader />}
    </>
  );
};
