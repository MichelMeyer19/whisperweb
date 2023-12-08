// file name: components/molecules/ChatIO.jsx
// component contains text input and send button with functionality to send messages within chatbox

import React, { useEffect, useState } from "react";
import InputText from "../atoms/InputText";
import Parse from "parse/dist/parse.min.js";


const ChatIO = ({ chat_id, currentUser, setMessages }) => {
  const [new_message, setNewMessage] = useState("");
  const [current_chat, setCurrentChat] = useState("");

  // fetch the chat from the database on initial load
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

  // update the new_message state when the user types in the input field
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  // send the message to the database
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

  // get the current time in the format HH:MM:SS AM/PM
  const getCurrentTime = () => {
    const currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} ${
      currentTime.getHours() >= 12 ? "PM" : "AM"
    }`;
  };

  // send the message when the user presses enter
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      // Simulate a click on the button
      event.preventDefault();
      handleSendClick();
    }
  };

  return (
    <div className="flex flex-row align-middle justify-between">
      <div className="w-full">
        <InputText value={new_message} onChange={handleInputChange} handleEnter={handleEnter} />
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
