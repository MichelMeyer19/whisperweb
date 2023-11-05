// components/atoms/InputText.jsx
import React, { useState } from "react";

const InputText = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder="Type something..."
      className={`w-4/5 bg-white rounded-full p-4 overflow-y-auto ${
        isFocused ? "placeholder-transparent" : "placeholder"
      } text-left`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default InputText;
