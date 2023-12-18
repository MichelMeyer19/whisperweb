// components/atoms/MsgText.jsx

import React from "react";

const MessageText = ({ text }) => {
  return (
    <p className="font-sans text-sm text-lightSlate max-w-full">{text}</p>
  );
};

export default MessageText;
