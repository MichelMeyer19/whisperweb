// components/molecules/ChatMessageOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import TopicText from "../atoms/TopicText";
import UserName from "../atoms/UserName";
import MessageText from "../atoms/MessageText";
import LoadingSpinner from "../atoms/LoadingSpinner";

const ChatMessageOverview = ({
  chatId,
  topic,
  userName,
  message,
  actual_chat,
}) => {
  // If chat is waiting match render like this
  if (actual_chat === false) {
    return (
      <div className="min-w-min w-11/12 max-w-4xl relative">
        <div
          className={`flex flex-col items-start bg-white p-5 border border-solid border-grey rounded shadow-md h-25 max-h-32${
            !message ? "justify-center" : ""
          }`}
        >
          <TopicText text={topic} actual_chat={actual_chat} />
          <UserName text={userName} additionalStyle="text-lightSlate" />
          {message && (
            <div className="line-clamp-1 text">
              <MessageText text={message} />
            </div>
          )}
          <div className="absolute bottom-0 right-0 p-5">
            {" "}
            {/* This will position the spinner */}
            <LoadingSpinner />
          </div>
        </div>
      </div>
    );
  }

  // Else render current chats like this
  return (
    <div className="min-w-min w-11/12 max-w-4xl">
      <Link to={`/chat/${chatId}`}>
        <div
          className={`flex flex-col items-start bg-white p-5 border border-solid border-black rounded shadow-md h-25 max-h-32 ${
            !message ? "justify-center" : ""
          }`}
        >
          <TopicText text={topic} actual_chat={actual_chat} />
          <UserName text={userName} />
          {message && (
            <div className="line-clamp-1">
              <MessageText text={message} />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChatMessageOverview;
