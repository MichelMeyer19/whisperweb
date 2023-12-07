// file name: components/molecules/ChatIO.jsx

import React, { useEffect, useState } from "react";
import InputText from "../atoms/InputText";
import Parse from "parse/dist/parse.min.js";


const ChatIO = ({ chat_id, currentUser, setMessages }) => {
  const [new_message, setNewMessage] = useState("");
  const [current_chat, setCurrentChat] = useState("");

  useEffect(() => {
    fetchChat();
  }, []);

  const fetchChat = async function () {
    const chat_pointer_query = new Parse.Query("Chats").equalTo(
      "objectId",
      chat_id
    );
    const result = await chat_pointer_query.first();

    console.log(result);
    setCurrentChat(result);
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (new_message.trim() === "") {
      return;
    }

    // Create a new Message object and save it to Parse
    let upload_message = new Parse.Object("Messages");
    upload_message.set("text", new_message);
    upload_message.set("chat_id", current_chat);
    upload_message.set("sent_by_id", currentUser);

    try {
      await upload_message.save();

      const messageData = {
        isStart: false,
        userName: currentUser.id,
        time: getCurrentTime(),
        message: new_message,
        avatarSrc: "/icons/CurrentUserIcon.svg",
      };

      setMessages((prevState) => [...prevState, messageData]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} ${
      currentTime.getHours() >= 12 ? "PM" : "AM"
    }`;
  };

  return (
    <div className="flex flex-row align-middle justify-between">
      <div className="w-full">
        <InputText value={new_message} onChange={handleInputChange} />
      </div>
      <div className="flex m-2">
        <button onClick={handleSendClick}>
          <img src={"/icons/send.svg"} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default ChatIO;
