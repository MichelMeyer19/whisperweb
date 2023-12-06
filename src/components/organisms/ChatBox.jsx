// file name: components/organisms/"ChatBox".jsx
import React, { useState, useEffect, useRef } from "react";
import Parse from "parse/dist/parse.min.js";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";
import BackgroundMesh from "../atoms/BackgroundMesh";

const ChatBox = ({ chat_id, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const prevMessagesLength = useRef(0);

  const fetchMessages = async function () {
    try {
      const query_messages = new Parse.Query("Messages")
        .equalTo("chat_id", chat_id)
        .ascending("createdAt");
      query_messages.include("sent_by_id");

      const result_messages = await query_messages.find();

      const processedMessages = result_messages.map((message) => ({
        isStart: message.get("sent_by_id").id !== currentUser.id,
        userName: message.get("sent_by_id").get("anonymous_username"),
        time: message.createdAt.toLocaleTimeString(),
        message: message.get("text"),
        avatarSrc:
          message.get("sent_by_id").id !== currentUser.id
            ? "/icons/OtherUser.svg"
            : "/icons/CurrentUserIcon.svg",
      }));

      console.log(processedMessages);

      setMessages(processedMessages);

      const hasNewMessages =
        processedMessages.length > prevMessagesLength.current;
      if (hasNewMessages) {
        setHasNewMessage(true);
      }

      prevMessagesLength.current = processedMessages.length;
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hasNewMessage) {
      scrollToBottom();
      setHasNewMessage(false); // Reset the flag after scrolling
    }
  }, [hasNewMessage]);

  return (
    <div className="w-11/12 bg-dorian rounded-lg overflow-y-auto shadow-lg mb-16 h-full flex flex-col items-center relative">
      <div className="w-11/12 bg-dorian overflow-y-auto h-full flex flex-col realtive">
        <div className="grow">
          {messages.map((message, index) => (
            <ChatMessageDetail
              key={index}
              isStart={message.isStart}
              userName={message.userName}
              time={message.time}
              message={message.message}
              avatarSrc={message.avatarSrc}
              addPadding={
                index === messages ||
                (index > 0 && messages[index - 1]?.isStart !== message.isStart)
              }
{/*
    <div className="w-11/12 border-solid border-black bg-dorian rounded-lg overflow-y-auto shadow-lg mb-4 h-full flex flex-col items-center relative">
      <div className="w-11/12 bg-dorian overflow-y-auto  h-full flex flex-col rel">
        <div className="flex-grow">
          {messages.map((message, index) => (
            <ChatMessageDetail
            key={index}
            isStart={message.isStart}
            userName={message.userName}
            time={message.time}
            message={message.message}
            avatarSrc={message.avatarSrc}
          */}

            />
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full bg-dorian bg-opacity-20 flex flex-col items-center justify-between">
        <div className="w-11/12 m-4 pl-3">
          <ChatIO
            chat_id={chat_id}
            currentUser={currentUser}
            setMessages={setMessages}
            messages={messages}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
