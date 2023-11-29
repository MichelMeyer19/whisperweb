import React, { useState, useEffect, useRef } from "react";
import Parse from "parse/dist/parse.min.js";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const ChatBox = ({ chat_id, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const fetchMessages = async function () {
    try {
      const query_messages = new Parse.Query("Messages")
        .equalTo("chat_id", chat_id)
        .ascending("createdAt");

      const result_messages = await query_messages.find();

      const processedMessages = result_messages.map((message) => ({
        isStart: message.get("sent_by_id").id !== currentUser.id,
        userName: message.get("sent_by_id").id,
        time: message.createdAt.toLocaleTimeString(),
        message: message.get("text"),
        avatarSrc:
          message.get("sent_by_id").id !== currentUser.id
            ? "/icons/obi.webp"
            : "/icons/anakin.webp",
      }));

      console.log(processedMessages);

      setMessages(processedMessages);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    const interval = setInterval(() => {
      fetchMessages();
      scrollToBottom(); // Scroll to bottom after each fetch
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount and unmount

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToBottom(); // Scroll to bottom when messages change
  }, [messages]);

  return (
    <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col relative">
      <div className="flex-grow">
        {messages.map((message, index) => (
          <ChatMessageDetail
            key={index}
            isStart={message.isStart}
            userName={message.userName}
            time={message.time}
            message={message.message}
            avatarSrc={message.avatarSrc}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatIO
        chat_id={chat_id}
        currentUser={currentUser}
        setMessages={setMessages}
        messages={messages}
      />
    </div>
  );
};

export default ChatBox;
