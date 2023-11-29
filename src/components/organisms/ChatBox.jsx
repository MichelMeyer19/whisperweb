// ChatBox.jsx
import React, { useState, useRef, useEffect } from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const ChatBox = ({ initialMessages }) => {
  const [chatMessages, setChatMessages] = useState(initialMessages || []);
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
