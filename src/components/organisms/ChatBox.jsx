import React, { useState } from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      isStart: true,
      userName: "Obi-Wan Kenobi",
      time: "12:45",
      message: "You were the Chosen One!",
      isDelivered: true,
      isSeen: false,
      avatarSrc: "/icons/obi.webp",
    },
    {
      isStart: false,
      userName: "Anakin",
      time: "12:46",
      message: "I hate you!",
      isDelivered: false,
      isSeen: true,
      avatarSrc: "/icons/anakin.webp",
    },
    {
      isStart: true,
      userName: "Obi-Wan Kenobi",
      time: "12:47",
      message: "...",
      isDelivered: true,
      isSeen: false,
      avatarSrc: "/icons/obi.webp",
    },
    {
      isStart: false,
      userName: "Anakin",
      time: "12:48",
      message: "!",
      isDelivered: false,
      isSeen: true,
      avatarSrc: "/icons/anakin.webp",
    },
  ]);

  const handleSendClick = (newMessage) => {
    setChatMessages([...chatMessages, newMessage]);
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
