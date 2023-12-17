import { useDispatch, useSelector } from 'react-redux';
import { getContactInfo, getFilter } from 'AppRedux/selectors.js';
import { removeContact } from 'AppRedux/slice.js';

const ContactList = () => {
  const contacts = useSelector(getContactInfo);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filterValue.trim()))
        .map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <button onClick={() => handleRemoveContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
