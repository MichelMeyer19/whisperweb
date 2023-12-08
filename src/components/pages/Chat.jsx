// file name: components/pages/"Chat".jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../organisms/ChatBox";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/BackArrow";
import PageSubHeadline from "../atoms/PageSubHeadline";
import Parse from "parse/dist/parse.min.js";

export const Chat = () => {

  const [chat_topic, setChatTopic] = useState({});
  const { chatId } = useParams();
  const currentUser = Parse.User.current();

  // when rendering the page, fetch the chat topic and the other username so it can be displayed in the header
  useEffect(() => {
    fetchChatTopic();
  }, []);

  // fetch the chat topic from the database
  const fetchChatTopic = async function () {
    try {
      const Chats = Parse.Object.extend("Chats");
      const chat_topic = await new Parse.Query(Chats).get(chatId);

      const topic_name = chat_topic.get("topic_name");
      // if no topic name is set, set the topic to "Off-Topic"
      if (topic_name == null) {
        setChatTopic("Off-Topic");
      } else {
        setChatTopic(topic_name);
      }

    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-w-full max-w-full h-full">
      <Back />
      <PageSubHeadline text={`${chat_topic}`} />
      <ChatBox chat_id={chatId} currentUser={currentUser} />
    </div>
  );
};

export default Chat;
