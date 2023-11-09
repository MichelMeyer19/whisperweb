// ChatBox.jsx
import React, { useState, useRef, useEffect } from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const MESSAGES = [
  {
    isStart: true,
    userName: "Obi-Wan Kenobi",
    time: "12:45",
    message: "You were the Chosen One!",
    avatarSrc: "/icons/obi.webp",
  },
  {
    isStart: false,
    userName: "Anakin",
    time: "12:46",
    message: "I hate you!",
    avatarSrc: "/icons/anakin.webp",
  },
  {
    isStart: true,
    userName: "Obi-Wan Kenobi",
    time: "12:47",
    message: "...",
    avatarSrc: "/icons/obi.webp",
  },
  {
    isStart: false,
    userName: "Anakin",
    time: "12:48",
    message: "!",
    avatarSrc: "/icons/anakin.webp",
  },
];

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState(MESSAGES);
  const chatBoxRef = useRef(null);

  const handleSendClick = (newMessage) => {
    setChatMessages((prevChatMessages) => [...prevChatMessages, newMessage]);
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div
      className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col"
      ref={chatBoxRef}
    >
      <div className="flex-grow">
        {chatMessages.map((message, index) => (
          <ChatMessageDetail key={index} {...message} />
        ))}
      </div>
      <div className="mt-auto">
        <ChatIO onSendClick={handleSendClick} />
      </div>
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
