// // components/pages/Chat.jsx
// import React from "react";
// import ChatBox from "../organisms/ChatBox";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";
// import Back from "../atoms/BackArrow";

// export const Chat = () => {
//   const chatMessages = [
//     {
//       isStart: true,
//       userName: "Anonymous Cat",
//       time: "12:45",
//       message:
//         "Lately, I've been feeling a bit overwhelmed with my family's expectations. Do you feel the same? ",
//       avatarSrc: "/icons/obi.webp",
//     },
//     {
//       isStart: false,
//       userName: "Anonymous Antilope",
//       time: "12:46",
//       message:
//         "Oh, I'm the youngest in my family. It's like I'm always in the shadow of my older siblings. They've set the bar so high, and everyone expects me to follow in their footsteps.",
//       avatarSrc: "/icons/anakin.webp",
//     },
//     {
//       isStart: true,
//       userName: "Anonymous Cat",
//       time: "12:47",
//       message:
//         "That sounds tough. Being the eldest, I feel the pressure to set an example. But I can imagine how being the youngest comes with its own set of challenges. Do you ever talk to your siblings about it?",
//       avatarSrc: "/icons/obi.webp",
//     },
//   ];

//   return (
//     <Temp>
//       <Back />
//       <PageHeadline text="#ChosenOne" />
//       <ChatBox chatMessages={chatMessages} />
//     </Temp>
//   );
// };

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
  const [chatMessages, setChatMessages] = useState([]);
  const currentUser = Parse.User.current();

  useEffect(() => {
    // Fetch chat messages based on the selected chat ID
    const Messages = Parse.Object.extend("Messages");
    const messagesQuery = new Parse.Query(Messages);
    messagesQuery.equalTo("chat_id", chatId);
    messagesQuery.ascending("createdAt"); // Fetch messages in ascending order

    messagesQuery
      .find()
      .then((messages) => {
        // Process the messages and set them in the state
        const processedMessages = messages.map((message) => ({
          isStart: message.get("sent_by_id") !== currentUser.id,
          userName: message.get("sent_by_id"), // Assuming sent_by_id represents the user
          time: message.createdAt.toLocaleTimeString(), // Adjust as needed
          message: message.get("text"),
          avatarSrc:
            message.get("sent_by_id") !== currentUser.id
              ? "/icons/obi.webp"
              : "/icons/anakin.webp", // Set different avatarSrc based on isStart
        }));

        setChatMessages(processedMessages);
      })
      .catch((error) => {
        console.error("Error fetching chat messages:", error);
      });
  }, [chatId, currentUser]);

  return (
    <Temp>
      <Back />
      <PageHeadline text={`#${chatId}`} />
      <ChatBox chatMessages={chatMessages} />
    </Temp>
  );
};

export default Chat;
