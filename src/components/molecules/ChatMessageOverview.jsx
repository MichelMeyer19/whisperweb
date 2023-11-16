import React from "react";
import { Link } from "react-router-dom";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessageOverview = ({ topic, userName, message }) => {
  return (
    <div className="m-2 min-w-min w-11/12 max-w-4xl">
      <Link to="/chat">
        <div className="flex flex-col items-start bg-dorian p-5 rounded shadow-lg">
          <TopicText text={topic} />
          <UsrName text={userName} />
          <div className="line-clamp-1">
            <MsgText text={message} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatMessageOverview;
