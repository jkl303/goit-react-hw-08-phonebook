import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactStyled } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactStyled>
      <p className="contact-name">{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete contact
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
