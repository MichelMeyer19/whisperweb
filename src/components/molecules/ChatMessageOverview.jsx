// components/molecules/ChatMessageOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessageOverview = ({
  chatId,
  topic,
  userName,
  message,
  actual_chat,
}) => {
  if (actual_chat === false) {
    return (
      <div className="min-w-min w-11/12 max-w-4xl">
        <div
          className={`flex flex-col bg-dorian p-5 rounded shadow-lg h-32 max-h-32 ${
            !message ? "justify-center" : ""
          }`}
        >
          <TopicText text={topic} actual_chat={actual_chat} />
          <UsrName text={userName} />
          {message && (
            <div className="line-clamp-1">
              <MsgText text={message} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-min w-11/12 max-w-4xl">
      <Link to={`/chat/${chatId}`}>
        <div
          className={`flex flex-col items-start bg-dorian p-5 rounded shadow-lg h-32 max-h-32 ${
            !message ? "justify-center" : ""
          }`}
        >
          <TopicText text={topic} actual_chat={actual_chat} />
          <UsrName text={userName} />
          {message && (
            <div className="line-clamp-1">
              <MsgText text={message} />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChatMessageOverview;
