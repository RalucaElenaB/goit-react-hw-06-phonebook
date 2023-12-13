import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

//test2

const key = 'contacts';
const getInitialContacts = () => [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(key)) ?? getInitialContacts()
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const key = 'contacts';
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);

  const handleOnDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = event => {
    const filterValue = event.target.value.toLowerCase();
    setFilter(filterValue);
  };

  const handleAddContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { ...newContact, id: nanoid() },
      ]);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <section>
      <h1>Phonebook</h1>
      <div className="AddContacts">
        <h3>Add a contact</h3>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div className="SearchContacts">
        <h3>Search a contact</h3>
        <Filter value={filter || ''} onChange={handleFilterChange} />
      </div>
      <div className="ContactsList">
        <h3>Contacts list</h3>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleOnDeleteContact}
        />
      </div>
    </section>
  );
};

export default App;
