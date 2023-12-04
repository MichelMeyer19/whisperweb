// file name: components/templates/"Temp".jsx
import React from "react";

const Temp = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      {children}
    </div>
  );
};

export default Temp;
