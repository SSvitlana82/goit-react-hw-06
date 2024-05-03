import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  const contaktBegin = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("dataContacts"));
    return storageData || contaktBegin;
  });

  const deleteContact = (contactId) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(newContacts);
  };
  useEffect(() => {
    localStorage.setItem("dataContacts", JSON.stringify(contacts));
  }, [contacts]);
  const [filterContact, setFilterContact] = useState("");
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterContact.toLowerCase());
  });
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox
        filterContact={filterContact}
        setFilterContact={setFilterContact}
      />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
