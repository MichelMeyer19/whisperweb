// components/organisms/ChatBoxOverview.jsx
import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";

const ChatBoxOverview = ({ chatId, chatMessages }) => {
  return (
    <div className="flex flex-col items-center w-11/12 bg-transparent m-2 p-4 h-full">
      {chatMessages.map((message) => (
        <ChatMessageOverview
          key={message.id}
          chatId={chatId} // Pass the chatId to ChatMessageOverview
          {...message}
        />
      ))}
    </div>
  );
};

export default ChatBoxOverview;
