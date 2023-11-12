// InputField.js atom
import React from "react";

const InputField = ({ type, id, value, onChange, placeholder, label }) => {
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
      />
    </label>
  );
};

export default InputField;
