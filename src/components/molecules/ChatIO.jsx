import React, { useState } from "react";
import InputText from "../atoms/InputText";

const ChatIO = ({ onSendClick }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      const newMessage = {
        isStart: false,
        userName: "YourUserName",
        time: getCurrentTime(),
        message: message,
        isDelivered: false,
        isSeen: false,
        avatarSrc: "/icons/anakin.webp",
      };

      onSendClick(newMessage);
      setMessage("");
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  };

  return (
    <div className="flex items-end">
      <InputText value={message} onChange={handleInputChange} />
      <button onClick={handleSendClick}>
        <img src={"/icons/send.svg"} alt="Send" />
      </button>
    </div>
  );
};

export default ChatIO;

// import React, { useState } from "react";
// import InputText from "../atoms/InputText";

// const ChatIO = () => {
//   const [message, setMessage] = useState("");

//   const handleInputChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSendClick = () => {
//     // Add your logic to handle sending the message
//     console.log("Message sent:", message);

//     // Reset the message input
//     setMessage("");
//   };

//   return (
//     <div className="flex items-end">
//       <InputText value={message} onChange={handleInputChange} />
//       <button onClick={handleSendClick}>
//         <img src={"/icons/send.svg"} alt="Send" />
//       </button>
//     </div>
//   );
// };

// export default ChatIO;
