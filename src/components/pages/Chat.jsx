// components/pages/Chat.jsx

import React from "react";
import ChatBox from "./molecules/ChatBox";

export const Chat = () => {
  const containerStyles =
    "w-11/12 bg-white rounded-lg p-4 overflow-y-auto h-full"; // Adjust as needed

  return (
    <div>
      {/* Example usage of ChatMessage component */}
      <ChatBox
        isStart={true}
        userName="Obi-Wan Kenobi"
        time="12:45"
        message="You were the Chosen One!"
        isDelivered={true}
        isSeen={false}
      />
      <ChatBox
        isStart={false}
        userName="Anakin"
        time="12:46"
        message="I hate you!"
        isDelivered={false}
        isSeen={true}
      />
    </div>
  );
};
