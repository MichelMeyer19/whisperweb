// file name: components/molecules/ChatMessageDetail.jsx

import React from "react";
import Avatar from "../atoms/Avatar";

const ChatMessageDetail = ({
  isStart,
  userName,
  time,
  message,
  avatarSrc,
  addPadding,
}) => {
  // conditionally rendering placement of messages
  const chatClass = isStart ? "chat-start" : "chat-end";
  const bubbleClass = isStart ? "bg-white text-black" : "bg-white text-black";
  const paddingClass = addPadding ? "mt-5" : "";

  return (
    <div className={` ${paddingClass}`}>
      <div className={`chat ${chatClass}`}>
        <Avatar src={avatarSrc} />
        <div className="chat-header">
          {/* Uncomment if the username should be displayed */}
          {/* {userName + " "} */}
          <time className="text-xs opacity-50">{time}</time>
        </div>
        <div className={`chat-bubble ${bubbleClass}`}>{message}</div>
        <div className="chat-footer opacity-50"></div>
      </div>
    </div>
  );
};

export default ChatMessageDetail;
