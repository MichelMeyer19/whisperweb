// components/atoms/InputText.jsx

import React, { useState } from "react";

const InputText = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type something..."
      className={`w-full border border-solid border-black bg-white rounded-full p-4 overflow-y-auto pr-1 ${
      // className={`w-full bg-white rounded-full p-4 overflow-y-auto ${
        isFocused ? "placeholder-transparent" : "placeholder"
      } text-left`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default InputText;
