import React, { useState, useEffect } from "react";
import Parse from "parse/dist/parse.min.js";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";

const ChatBox = ({ chat_id, currentUser }) => {
  const [messages, setMessages] = useState([]);

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
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000); // Fetch messages every 2 seconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col">
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
      </div>

      <div className="mt-auto">
        <ChatIO
          chat_id={chat_id}
          currentUser={currentUser}
          setMessages={setMessages}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default ChatBox;
