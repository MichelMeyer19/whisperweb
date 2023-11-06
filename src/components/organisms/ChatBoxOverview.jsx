import React from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";

const ChatBoxOverview = ({ chatMessages }) => {
  return (
    <div className="flex flex-col w-11/12 bg-transparent rounded-lg m-2 p-4 overflow-y-auto shadow-lg">
      {chatMessages.map((message, index) => (
        <ChatMessageDetail key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatBoxOverview;
