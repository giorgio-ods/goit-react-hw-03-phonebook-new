import React from "react";
import PropTypes from "prop-types";

export default function ContactsList({ contacts, onChange }) {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <div>
            <p>{`${name}:${phone}`}</p>
            <button type="button" onClick={() => onChange(id)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onChange: PropTypes.func,
};