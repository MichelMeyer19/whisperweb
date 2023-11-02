// components/molecules/ChatMessage.jsx

import React from "react";

const ChatBox = ({ isStart, userName, time, message, isDelivered, isSeen }) => {
  const chatClass = isStart ? "chat-start" : "chat-end";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {/* You can replace the image source with the appropriate user image */}
          <img
            src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt={`Avatar of ${userName}`}
          />
        </div>
      </div>
      <div className="chat-header">
        {userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble">{message}</div>
      <div className="chat-footer opacity-50">
        {isDelivered && "Delivered"}
        {isSeen && `Seen at ${time}`}{" "}
        {/* Assuming time is provided for seen status */}
      </div>
    </div>
  );
};

export default ChatBox;
