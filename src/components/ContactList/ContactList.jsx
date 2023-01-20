// import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {
          items.length > 0 && JSON.stringify(items, null, 2)
          //  items.map(contact => {
          //   return (
          //     <li key={contact.id}>
          //       <Contact contact={contact}></Contact>
          //     </li>
          //   );
          // })}
        }
      </ul>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
    </>
  );
};
