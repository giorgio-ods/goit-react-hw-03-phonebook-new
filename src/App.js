import React, { Component } from "react";
import Input from "./Components/Input/Input";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = ({ name, phone }) => {
    const checkName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(
        "This name has already been added to your contact list. Please check it "
      );
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { id: nanoid(), name, phone }],
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const modified = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(modified)
    );
  };

  refreshFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };



  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const LScontacts = localStorage.getItem("contacts");
    
    
    let parsedContacts = [...this.state.contacts];

    if (LScontacts){parsedContacts = JSON.parse(LScontacts);}
    
     

    this.setState({ contacts: parsedContacts });
  }

  render() {
    const filteredContacts = this.filterContacts();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Input onSubmit={this.addNewContact} />
        <h3>Contacts list</h3>
        <Filter value={filter} onChange={this.refreshFilter} />
        <ContactsList
          contacts={filteredContacts}
          onChange={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;