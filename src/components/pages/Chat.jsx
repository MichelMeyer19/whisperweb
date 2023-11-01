// Chat.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { chatId } = useParams();

  useEffect(() => {
    // Fetch chat data based on chatId from the backend
    // You might use a state management library or local state to handle the fetched data
    console.log(`Fetching data for chat with ID: ${chatId}`);
  }, [chatId]);

  return (
    <div>
      {/* Your Chat component content */}
      <h2>Chat Page</h2>
    </div>
  );
};

export default Chat;
