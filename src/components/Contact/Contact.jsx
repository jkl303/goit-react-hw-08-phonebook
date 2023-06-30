import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactStyled, TrashIcon } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone } = contact;

  return (
    <ContactStyled>
      <div>
        <h3>{name}</h3>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <button onClick={() => dispatch(deleteContact(contact._id))}>
        <TrashIcon />
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
