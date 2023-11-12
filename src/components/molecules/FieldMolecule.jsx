import InputField from "../atoms/InputField";

const FieldMolecule = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  errorMessage,
}) => (
  <div className="mb-4">
    {" "}
    {/* Add margin for consistent spacing */}
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <InputField
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {errorMessage && (
      <span className="text-red-500 text-xs">{errorMessage}</span>
    )}
  </div>
);

export default FieldMolecule;
