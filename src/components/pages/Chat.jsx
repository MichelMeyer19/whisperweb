// components/pages/Chat.jsx

import React from "react";
import ChatBox from "../organisms/ChatBox";
import Temp from "../template/Temp";

export const Chat = () => {
  return (
    <Temp>
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
    </Temp>
  );
};
