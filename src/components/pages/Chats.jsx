// components/pages/Chats.jsx
import React from "react";
import ChatMessage from "../molecules/ChatMessage";

export const Chats = () => {
  return (
    <div>
      <h1>Chats</h1>
      {/* Render ChatMessage component with template text */}

      {/*This is a simple way to demonstrate rendering the 
      ChatMessage component within the Chats page. In a 
      real-world scenario, you would likely fetch data dynamically 
      and map it to the ChatMessage component based on the actual 
      messages or conversations in your application.*/}

      <ChatMessage
        topic="#Family Relationships"
        userName="Anonymous Cat"
        message="That sounds tough. Being the greatest on earth."
      />
      <ChatMessage
        topic="General Chat"
        userName="Anonymous Grasshopper"
        message="Template text issa nice"
      />
    </div>
  );
};
