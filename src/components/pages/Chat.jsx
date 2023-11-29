// components/pages/Chat.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/BackArrow";
import Parse from "parse/dist/parse.min.js";

export const Chat = () => {
  const [messages, setMessages] = useState({});
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
      <Back />
      <PageHeadline text={`#${chat_topic}`} />
      <ChatBox chat_id={chatId} currentUser={currentUser} />
    </Temp>
  );
};

export default Chat;

// // components/pages/Chat.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ChatBox from "../organisms/ChatBox";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";
// import Back from "../atoms/BackArrow";
// import Parse from "parse/dist/parse.min.js";

// export const Chat = () => {
//   const { chatId } = useParams();
//   const [chatData, setChatData] = useState({});
//   const currentUser = Parse.User.current();

//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         const Chats = Parse.Object.extend("Chats");
//         const chat = await new Parse.Query(Chats).get(chatId);

//         setChatData({
//           topic: chat.get("topic_name"),
//           messages: [],
//         });

//         const Messages = Parse.Object.extend("Messages");
//         const messagesQuery = new Parse.Query(Messages);
//         messagesQuery.equalTo("chat_id", chatId);
//         messagesQuery.ascending("createdAt");
//         const messages = await messagesQuery.find();

//         const processedMessages = messages.map((message) => ({
//           isStart: message.get("sent_by_id") !== currentUser.id,
//           userName: message.get("sent_by_id"),
//           time: message.createdAt.toLocaleTimeString(),
//           message: message.get("text"),
//           avatarSrc:
//             message.get("sent_by_id") !== currentUser.id
//               ? "/icons/obi.webp"
//               : "/icons/anakin.webp",
//         }));

//         setChatData((prevChatData) => ({
//           ...prevChatData,
//           messages: processedMessages,
//         }));
//       } catch (error) {
//         console.error("Error fetching chat messages:", error);
//       }
//     };

//     fetchChatData();
//   }, [chatId, currentUser]);

//   console.log(chatData);

//   return (
//     <Temp>
//       <Back />
//       <PageHeadline text={`#${chatData.topic}`} />
//       <ChatBox initialMessages={chatData.messages} />
//     </Temp>
//   );
// };

// export default Chat;
