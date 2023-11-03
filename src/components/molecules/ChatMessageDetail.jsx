// components/molecules/ChatMessageDetail.jsx

import React from "react";
import Avatar from "../atoms/Avatar";

const ChatMessageDetail = ({
  isStart,
  userName,
  time,
  message,
  isDelivered,
  isSeen,
  avatarSrc,
}) => {
  const chatClass = isStart ? "chat-start" : "chat-end";

  return (
    <div className={`chat ${chatClass}`}>
      <Avatar src={avatarSrc} />
      <div className="chat-header">
        {userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble ">{message}</div>
      <div className="chat-footer opacity-50"></div>
      {/* You can add any additional content specific to ChatMessageDetail */}
      {/* For example: */}
    </div>
  );
};

export default ChatMessageDetail;
