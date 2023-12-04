// components/organisms/ChatBoxOverview.jsx
import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";

const ChatBoxOverview = ({ chatId, chatMessages }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md bg-transparent p-4 h-30 overflow-y-auto">
      {/* Set a fixed height for the container */}
      {chatMessages.map((message) => (
        <ChatMessageOverview key={message.id} chatId={chatId} {...message} />
      ))}
    </div>
  );
};

export default ChatBoxOverview;
