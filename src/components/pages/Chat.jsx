// components/pages/Chat.jsx

import React from "react";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";

export const Chat = () => {
  const containerStyles = "w-4/5 bg-white rounded-lg p-4 overflow-y-auto h-4/5"; // Adjust as needed

  return (
    <Temp>
      <PageHeadline text="Chat with" />
      {/* Apply the scrollbar styles to the scrollable container */}
      <style>
        {`
          /* Hide the scrollbar for Webkit browsers (Chrome, Safari) */
          .${containerStyles}::-webkit-scrollbar {
            width: 0 !important;
          }

          /* Optional: If you want to hide the scrollbar in Firefox */
          .${containerStyles} {
            scrollbar-width: thin;
          }
        `}
      </style>

      {/* Scrollable container for chat messages */}
      <div className={containerStyles}>
        {/* Example usage of ChatMessage component for Obi-Wan */}
        <ChatBox
          isStart={true}
          userName="Obi-Wan Kenobi"
          time="12:45"
          message="You were the Chosen One!"
          isDelivered={true}
          isSeen={false}
          // Set the avatar source for Obi-Wan
          avatarSrc="/icons/obi.webp"
        />
        {/* Example usage of ChatMessage component for Anakin */}
        <ChatBox
          isStart={false}
          userName="Anakin"
          time="12:46"
          message="I hate you!"
          isDelivered={false}
          isSeen={true}
          // Set the avatar source for Anakin
          avatarSrc="/icons/anakin.webp"
        />
      </div>
    </Temp>
  );
};
