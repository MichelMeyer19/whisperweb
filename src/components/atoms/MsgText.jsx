// components/atoms/MsgText.jsx
import React from "react";

const MsgText = ({ text }) => {
  return (
    <p className="font-sans text-base text-lightSlate overflow-hidden max-w-full">
      {text}
    </p>
  );
};

export default MsgText;
