import { useState } from 'react';
import { addContact, filterContacts } from 'AppRedux/slice';
import { getContactInfo, getFilter } from 'AppRedux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContactInfo);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleContactData = () => {
    const data = { id: nanoid(6), name: name, number: number };
    dispatch(addContact(data));
    if (filterValue !== ' ') {
      dispatch(filterContacts(''));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      if (filterValue !== '') {
        dispatch(filterContacts(''));
      }
      alert('Te rog completează toate câmpurile!');
      return;
    }
    handleContactData();
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4>Name:</h4>
        <input
          type="text"
          placeholder="Add name....."
          name="name"
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        <h4>Phone number:</h4>
        <input
          type="tel"
          placeholder="Add number....."
          name="number"
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <button className="SubmitButton" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
