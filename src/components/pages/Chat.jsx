// components/pages/Chat.jsx
import React from "react";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/Back"; // Import the Back component

export const Chat = () => {
  const chatMessages = [
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
    // Add more chat messages as needed -> perhaps an array of chats with unique id's?
  ];

  return (
    <Temp>
      <div className="flex items-start">
        <Back />
      </div>
      <PageHeadline text="#ChosenOne" />
      <ChatBox chatMessages={chatMessages} />
    </Temp>
  );
};
