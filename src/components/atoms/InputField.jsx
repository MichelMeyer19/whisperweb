// InputField.js atom
import React from "react";

const InputField = ({ type, id, value, onChange, placeholder, label }) => {
  // Determine the correct autocomplete attribute based on input type
  let autoCompleteValue;
  if (type === 'email') {
    autoCompleteValue = 'username';
  } else if (type === 'password') {
    autoCompleteValue = 'current-password';
  }

  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md mb-4"
        required
        // Apply the autocomplete attribute dynamically
        autoComplete={autoCompleteValue}
      />
    </label>
  );
};

export default InputField;
