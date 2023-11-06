// components/templates/PageTemplate.jsx
import React from "react";

const Temp = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-w-full max-w-full">
      {children}
    </div>
  );
};

export default Temp;
