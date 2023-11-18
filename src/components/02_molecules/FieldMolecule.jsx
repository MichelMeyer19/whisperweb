// FieldMolecule.jsx component - a wrapper for InputField with label and error message

import InputField from "../atoms/InputField";

const FieldMolecule = ({
  id, // Identifier for the input field and label
  type, // Type of input (e.g., text, password, email)
  value, // Value of the input field
  onChange, // Function to handle changes in the input field
  placeholder, // Placeholder text for the input field
  label, // Text label for the input field
  errorMessage, // Error message to display if there's an error
}) => (
    <div className="mb-4"> {/* Add margin for consistent spacing */}
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label} {/* Label for the input field */}
    </label>
    <InputField
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {errorMessage && (
      <span className="text-red-500 text-xs">{errorMessage}</span> // Display error message if it exists
    )}
  </div>
);

export default FieldMolecule;
