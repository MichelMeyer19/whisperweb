import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";

const ChatBoxOverview = ({ chatMessages }) => {
  return (
    <div className="flex flex-col items-center w-11/12 bg-transparent m-2 p-4 overflow-y-auto h-full">
      {chatMessages.map((message, index) => (
        <ChatMessageOverview key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatBoxOverview;
