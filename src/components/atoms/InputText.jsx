// components/atoms/InputText.jsx
import React, { useState } from "react";

// This component is a text input field which is used for entering text.
// It accepts 'value', 'onChange', and 'handleEnter' as props for handling input changes and key events.
const InputText = ({ value, onChange, handleEnter }) => {
  // State to track focus status of the input field
  const [isFocused, setIsFocused] = useState(false);

  // Render the text input field
  return (
    <input
      type="text"
      value={value}
      onChange={onChange} // Handle changes in input value
      onKeyDown={handleEnter} // Handle 'Enter' key press events
      placeholder="Type something..." // Placeholder text for the input field
      className={`w-full border border-solid border-grey bg-white rounded-full p-4 overflow-y-auto pr-1 ${
        // Conditional styling based on focus state
        isFocused ? "focus:outline-none focus:ring-0.5 placeholder-transparent" : "placeholder"
      } text-left`}
      onFocus={() => setIsFocused(true)} // Set focus state to true when input is focused
      onBlur={() => setIsFocused(false)} // Set focus state to false when input loses focus
    />
  );
};

export default InputText;
