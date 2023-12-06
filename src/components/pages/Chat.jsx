// components/pages/Chat.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../organisms/ChatBox";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/BackArrow";
import Parse from "parse/dist/parse.min.js";

export const Chat = () => {
  const [chat_topic, setChatTopic] = useState({});

  const { chatId } = useParams();
  const currentUser = Parse.User.current();

  useEffect(() => {
    fetchChatTopic();
  }, []);

  const fetchChatTopic = async function () {
    try {
      const Chats = Parse.Object.extend("Chats");
      const chat_topic = await new Parse.Query(Chats).get(chatId);

      setChatTopic(chat_topic.get("topic_name"));
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-w-full max-w-full h-full">
      <Back />
      <PageHeadline text={`#${chat_topic}`} />
      <ChatBox chat_id={chatId} currentUser={currentUser} />
    </div>
  );
};

export default Chat;
