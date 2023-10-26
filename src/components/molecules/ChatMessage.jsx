// components/molecules/ChatMessage.jsx
import React from "react";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessage = ({ topic, userName, message }) => {
  return (
    <div className="bg-white m-5 p-5 rounded max-h-32 max-w-xl">
      <TopicText text={topic} />
      <UsrName text={userName} />
      <MsgText text={message} />
    </div>
  );
};

export default ChatMessage;
