import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (
      contacts.length > 0 &&
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(`${name.value} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name.value, number: number.value }));
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
