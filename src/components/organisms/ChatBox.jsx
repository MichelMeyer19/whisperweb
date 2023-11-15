// import React, { useState, useRef, useEffect } from "react";
// import ChatMessageDetail from "../molecules/ChatMessageDetail";
// import ChatIO from "../molecules/ChatIO";
// import Parse from 'parse';

// const ChatBox = () => {
//   const [chatMessages, setChatMessages] = useState([]);
//   const chatBoxRef = useRef(null);

//   // Assuming currentChatObject is the chat object retrieved from Parse
//   const currentChatObject = // ...

//   const handleSendClick = (newMessage) => {
//     setChatMessages((prevChatMessages) => [...prevChatMessages, newMessage]);
//   };

//   useEffect(() => {
//     // Fetch chat messages when the component mounts
//     const fetchMessages = async () => {
//       const Message = Parse.Object.extend('Message');
//       const messageQuery = new Parse.Query(Message);
//       messageQuery.equalTo('chat_id', currentChatObject);

//       try {
//         const messages = await messageQuery.find();
//         const messageData = messages.map((message) => ({
//           isStart: // determine if the message is from the current user or not,
//           userName: message.get('sent_by_id').get('username'),
//           time: getCurrentTime(message.createdAt),
//           message: message.get('text'),
//           avatarSrc: "/icons/anakin.webp", // Change this based on your logic
//         }));

//         setChatMessages(messageData);
//       } catch (error) {
//         console.error('Error fetching messages: ', error);
//       }
//     };

//     fetchMessages();
//   }, [currentChatObject]);

//   const getCurrentTime = (date) => {
//     const currentTime = date || new Date();
//     return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
//   };

//   return (
//     <div
//       className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col"
//       ref={chatBoxRef}
//     >
//       <div className="flex-grow">
//         {chatMessages.map((message, index) => (
//           <ChatMessageDetail key={index} {...message} />
//         ))}
//       </div>
//       <div className="mt-auto">
//         <ChatIO onSendClick={handleSendClick} />
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

// ChatBox.jsx
import React, { useState, useRef, useEffect } from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";
import ChatIO from "../molecules/ChatIO";
import Parse from "parse/dist/parse.min.js";

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const chatBoxRef = useRef(null);

  const handleSendClick = async (newMessageData, updatedMessage) => {
    // Update state with the new message data
    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      newMessageData,
    ]);

    // You can perform additional logic here with the updatedMessage if needed

    // Scroll to the bottom when new messages are added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  useEffect(() => {
    // Fetch initial chat messages when the component mounts
    const fetchMessages = async () => {
      const Message = Parse.Object.extend("Message");
      const messageQuery = new Parse.Query(Message);

      try {
        const messages = await messageQuery.find();
        const messageData = messages.map((message) => ({
          isStart: false, // determine if the message is from the current user or not,
          userName: message.get("sent_by_id").get("username"),
          time: getCurrentTime(message.createdAt),
          message: message.get("text"),
          avatarSrc: "/icons/anakin.webp",
        }));

        setChatMessages(messageData);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();
  }, []);

  const getCurrentTime = (date) => {
    const currentTime = date || new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  };

  return (
    <div
      className="w-11/12 bg-dorian rounded-lg m-2 p-4 overflow-y-auto shadow-lg mb-16 h-full flex flex-col"
      ref={chatBoxRef}
    >
      <div className="flex-grow">
        {chatMessages.map((message, index) => (
          <ChatMessageDetail key={index} {...message} />
        ))}
      </div>
      <div className="mt-auto">
        <ChatIO onSendClick={handleSendClick} />
      </div>
    </div>
  );
};

export default ChatBox;
