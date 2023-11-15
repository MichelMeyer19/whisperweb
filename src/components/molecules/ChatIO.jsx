import React, { useState } from "react";
import InputText from "../atoms/InputText";
import Parse from "parse/dist/parse.min.js";

const ChatIO = ({ onSendClick }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() === "") {
      return;
    }

    // Assuming currentUser is the logged-in user object from Parse
    const currentUser = Parse.User.current();
    const currentChatObject = Parse.Messages.current();

    // Create a new Message object and save it to Parse
    const Message = Parse.Object.extend("Messages");
    const newMessage = new Message();
    newMessage.set("text", message);
    newMessage.set("chat_id", currentUser);
    newMessage.set("GZ5ktynaEz", currentChatObject); // Provide the current chat object
    console.log(currentUser);
    try {
      await newMessage.save();
      const messageData = {
        isStart: false,
        userName: currentUser.get("username"),
        time: getCurrentTime(),
        message: message,
        avatarSrc: "/icons/anakin.webp",
      };

      onSendClick(messageData);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
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

// ChatIO.jsx
// Remember to make GPT provide comments for the following code

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

//     try {
//       await newMessage.save();

//       // Optionally, you can fetch the updated message from Parse and use it to update the UI
//       const updatedMessage = await newMessage.fetch();

//       const messageData = {
//         isStart: false,
//         userName: currentUser.get("username"),
//         time: getCurrentTime(),
//         message: message,
//         avatarSrc: "/icons/anakin.webp",
//       };

//       // Pass the updatedMessage object to your parent component
//       onSendClick(messageData, updatedMessage);

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
