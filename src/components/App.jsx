import { Component } from "react";
import shortid from 'shortid';
import Section from "./Section";
import Form from './Form';
import Filter from "./Filter";
import List from "./List";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          width: '400px',
          margin: '30px auto',
          backgroundColor: '#d5d6d2',
          color: '#2f2e33',
          borderRadius: '8px',
          boxShadow: '0px 0px 8px 6px rgba(199, 199, 199, 1)',
          padding: '16px 0',
        }}
      >
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <List
            contacts={this.getContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
};
