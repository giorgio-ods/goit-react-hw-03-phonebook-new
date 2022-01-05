import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddContacts extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Enter Phone Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

AddContacts.propTypes = {
  onSubmit: PropTypes.func,
};