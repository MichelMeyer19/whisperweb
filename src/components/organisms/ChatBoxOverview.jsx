// components/organisms/ChatBoxOverview.jsx
import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";

const ChatBoxOverview = ({ chatId, chatMessages, actual_chat }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md bg-transparent p-4 h-30 overflow-y-auto">
      {chatMessages.map((message) => (
        <ChatMessageOverview
          key={message.id}
          chatId={chatId}
          {...message}
          actual_chat={actual_chat}
        />
      ))}
    </div>
  );
};

export default ChatBoxOverview;
