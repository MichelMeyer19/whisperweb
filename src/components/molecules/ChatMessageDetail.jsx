// components/molecules/ChatMessageDetail.jsx

import React from "react";
import Avatar from "../atoms/Avatar";

const ChatMessageDetail = ({ isStart, userName, time, message, avatarSrc }) => {
  const chatClass = isStart ? "chat-start" : "chat-end";
  const bubbleClass = isStart ? "bg-white text-black" : "bg-green text-black";

  return (
    <div className={`chat ${chatClass}`}>
      <Avatar src={avatarSrc} />
      <div className="chat-header">
        {userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className={`chat-bubble ${bubbleClass}`}>{message}</div>
      <div className="chat-footer opacity-50"></div>
    </div>
  );
};

export default ChatMessageDetail;