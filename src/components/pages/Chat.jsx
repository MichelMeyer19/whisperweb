// file name: components/pages/"Chat".jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";
import PageSubHeadline from "../atoms/PageSubHeadline";
import BackArrow from "../atoms/BackArrow";
import Parse from "parse/dist/parse.min.js";

export const Chat = () => {
  const [chat_topic, setChatTopic] = useState({});

  const { chatId } = useParams();
  const currentUser = Parse.User.current();

  //console.log(chatId);
  //console.log(currentUser);

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
    <Temp>
      <BackArrow />
      <PageSubHeadline text={`#${chat_topic}`} />
      <ChatBox chat_id={chatId} currentUser={currentUser} />
    </Temp>
  );
};

export default Chat;
