// components/organisms/ChatBox.jsx

import React from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";

const ChatBox = ({ chatMessages }) => {
  return (
    <div className="w-4/5 bg-dorian rounded-lg p-4 overflow-y-auto h-4/5 shadow-lg">
      {chatMessages.map((message, index) => (
        <ChatMessageDetail key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatBox;
