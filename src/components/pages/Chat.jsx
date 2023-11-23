// components/pages/Chat.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/BackArrow";
import Parse from "parse/dist/parse.min.js";

export const Chat = () => {
  const { chatId } = useParams();
  const [chatData, setChatData] = useState({});
  const currentUser = Parse.User.current();

  useEffect(() => {
    // Fetch chat messages and chat details based on the selected chat ID
    const Messages = Parse.Object.extend("Messages");
    const messagesQuery = new Parse.Query(Messages);
    messagesQuery.equalTo("chat_id", chatId);
    messagesQuery.ascending("createdAt");

    const Chats = Parse.Object.extend("Chats");
    const chatsQuery = new Parse.Query(Chats);
    chatsQuery
      .get(chatId) // Fetch the chat details
      .then((chat) => {
        setChatData({
          topic: chat.get("topic_name"),
          messages: [],
        });

        // Fetch messages for the current chat
        return messagesQuery.find();
      })
      .then((messages) => {
        const processedMessages = messages.map((message) => ({
          isStart: message.get("sent_by_id") !== currentUser.id,
          userName: message.get("sent_by_id"),
          time: message.createdAt.toLocaleTimeString(),
          message: message.get("text"),
          avatarSrc:
            message.get("sent_by_id") !== currentUser.id
              ? "/icons/obi.webp"
              : "/icons/anakin.webp",
        }));

        setChatData((prevChatData) => ({
          ...prevChatData,
          messages: processedMessages,
        }));
      })
      .catch((error) => {
        console.error("Error fetching chat messages:", error);
      });
  }, [chatId, currentUser]);

  return (
    <Temp>
      <Back />
      <PageHeadline text={`#${chatData.topic}`} />
      <ChatBox chatMessages={chatData.messages} />
    </Temp>
  );
};

export default Chat;
