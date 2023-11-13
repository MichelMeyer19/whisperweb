// import React, { useState } from "react";
// import InputText from "../atoms/InputText";
// import Parse from "parse";

// const ChatIO = ({ onSendClick }) => {
//   const [message, setMessage] = useState("");

//   const handleInputChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSendClick = async () => {
//     if (message.trim() === "") {
//       return;
//     }

//     // Assuming currentUser is the logged-in user object from Parse
//     const currentUser = Parse.User.current();

//     // Create a new Message object and save it to Parse
//     const Message = Parse.Object.extend("Message");
//     const newMessage = new Message();
//     newMessage.set("text", message);
//     newMessage.set("sent_by_id", currentUser);
//     newMessage.set("chat_id", currentChatObject); // Provide the current chat object

//     try {
//       await newMessage.save();
//       const messageData = {
//         isStart: false,
//         userName: currentUser.get("username"),
//         time: getCurrentTime(),
//         message: message,
//         avatarSrc: "/icons/anakin.webp",
//       };

//       onSendClick(messageData);
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending message: ", error);
//     }
//   };

//   const getCurrentTime = () => {
//     const currentTime = new Date();
//     return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
//   };

//   return (
//     <div className="flex flex-row items-end">
//       <InputText value={message} onChange={handleInputChange} />
//       <div className="flex m-2">
//         <button onClick={handleSendClick}>
//           <img src={"/icons/send.svg"} alt="Send" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatIO;

// ChatIO.jsx
// Remember to make GPT provide comments for the following code

import React, { useState } from "react";
import InputText from "../atoms/InputText";

const ChatIO = ({ onSendClick }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      isStart: false,
      userName: "Anakin",
      time: getCurrentTime(),
      message: message,
      avatarSrc: "/icons/anakin.webp",
    };

    onSendClick(newMessage);
    setMessage("");
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  };

  return (
    <div className="flex flex-row items-end">
      <InputText value={message} onChange={handleInputChange} />
      <div className="flex m-2">
        <button onClick={handleSendClick}>
          <img src={"/icons/send.svg"} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default ChatIO;
