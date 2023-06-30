import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactFormStyled } from './ContactForm.styled';
import { ButtonStyled } from 'styles/Button.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;
    if (
      contacts.length > 0 &&
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      Notify.info(`${name.value} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name.value, phone: phone.value }));
      e.target.reset();
    }
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="phone">
        Number
        <input
          type="tel"
          name="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </ContactFormStyled>
  );
};
