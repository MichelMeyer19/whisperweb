import React from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import InputText from "../atoms/InputText";

const ChatBox = ({ chatMessages }) => {
  return (
    <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col">
      <div className="flex-grow">
        {chatMessages.map((message, index) => (
          <ChatMessageDetail key={index} {...message} />
        ))}
      </div>
      <div className="flex items-end">
        <InputText />
      </div>
    </div>
  );
};

export default ChatBox;
