import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <div className="AddContacts">
        <h3>Add a contact</h3>
        <ContactForm />
      </div>
      <div className="SearchContacts">
        <h3>Search a contact</h3>
        <Filter />
      </div>
      <div className="ContactsList">
        <h3>Contacts list</h3>
        <ContactList />
      </div>
    </section>
  );
};

export default App;
