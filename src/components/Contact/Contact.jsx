import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      {/* <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete contact
      </button> */}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
