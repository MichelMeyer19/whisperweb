// components/organisms/ChatBox.jsx

import React from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import InputText from "../atoms/InputText";

const ChatBox = ({ chatMessages }) => {
  return (
    <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto h-4/5 shadow-lg">
      {chatMessages.map((message, index) => (
        <ChatMessageDetail key={index} {...message} />
      ))}
      <InputText />
    </div>
  );
};

export default ChatBox;
