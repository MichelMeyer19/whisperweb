// ChatBox.jsx
import React, { useState } from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const MESSAGES = [
  {
    isStart: true,
    userName: "Anonymous Cat",
    time: "12:45",
    message: "Lately, I've been feeling a bit overwhelmed with my family's expectations. Do you feel the same? ",
    avatarSrc: "/icons/obi.webp",
  },
  {
    isStart: false,
    userName: "Anonymous Antilope",
    time: "12:46",
    message: "Oh, I'm the youngest in my family. It's like I'm always in the shadow of my older siblings. They've set the bar so high, and everyone expects me to follow in their footsteps.",
    avatarSrc: "/icons/anakin.webp",
  },
  {
    isStart: true,
    userName: "Anonymous Cat",
    time: "12:47",
    message: "That sounds tough. Being the eldest, I feel the pressure to set an example. But I can imagine how being the youngest comes with its own set of challenges. Do you ever talk to your siblings about it?",
    avatarSrc: "/icons/obi.webp",
  },
];

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState(MESSAGES);

  const handleSendClick = (newMessage) => {
    setChatMessages((prevChatMessages) => [...prevChatMessages, newMessage]);
  };

  return (
    <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col">
      <div className="flex-grow">
        {chatMessages.map((message, index) => (
          <ChatMessageDetail key={index} {...message} />
        ))}
      </div>
      <ChatIO onSendClick={handleSendClick} />
    </div>
  );
};

export default ChatBox;

// import React from "react";
// import ChatMessageDetail from "../molecules/ChatMessageDetail";
// import ChatIO from "../molecules/ChatIO";

// const ChatBox = ({ chatMessages }) => {
//   return (
//     <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col">
//       <div className="flex-grow">
//         {chatMessages.map((message, index) => (
//           <ChatMessageDetail key={index} {...message} />
//         ))}
//       </div>
//       <ChatIO />
//     </div>
//   );
// };

// export default ChatBox;
