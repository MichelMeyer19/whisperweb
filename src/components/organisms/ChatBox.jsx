// components/organisms/ChatBox.jsx
import React from "react";
import ChatMessageDetail from "../molecules/ChatMessageDetail";

const ChatBox = ({ chatMessages }) => {
  const containerStyles = "w-4/5 bg-white rounded-lg p-4 overflow-y-auto h-4/5";

  return (
    <div className={containerStyles}>
      {chatMessages.map((message, index) => (
        <ChatMessageDetail key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatBox;

// // components/organisms/ChatBox.jsx

// import React from "react";
// import Avatar from "../atoms/Avatar";

// const ChatBox = ({
//   isStart,
//   userName,
//   time,
//   message,
//   isDelivered,
//   isSeen,
//   avatarSrc,
// }) => {
//   const chatClass = isStart ? "chat-start" : "chat-end";

//   return (
//     <div className={`chat ${chatClass}`}>
//       {/* Use the Avatar component with the provided src */}
//       <Avatar src={avatarSrc} />
//       <div className="chat-header">
//         {userName}
//         <time className="text-xs opacity-50">{time}</time>
//       </div>
//       <div className="chat-bubble">{message}</div>
//       <div className="chat-footer opacity-50">
//         {isDelivered && "Delivered"}
//         {isSeen && `Seen at ${time}`}
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

// // components/organisms/ChatBox.jsx

// import React from "react";
// import Avatar from "../atoms/Avatar";

// const ChatBox = ({
//   isStart,
//   userName,
//   time,
//   message,
//   isDelivered,
//   isSeen,
//   avatarSrc,
// }) => {
//   const chatClass = isStart ? "justify-start" : "justify-end";
//   const containerClasses = `chat ${chatClass}`;
//   const contentClasses = "max-w-2/3 bg-white rounded-lg p-4 overflow-y-auto max-h-40"; // Adjust as needed

//   return (
//     <div className={containerClasses}>
//       <Avatar src={avatarSrc} />
//       <div className={contentClasses}>
//         <div className="chat-header">
//           {userName}
//           <time className="text-xs opacity-50">{time}</time>
//         </div>
//         <div className="chat-bubble">{message}</div>
//         <div className="chat-footer opacity-50">
//           {isDelivered && "Delivered"}
//           {isSeen && `Seen at ${time}`}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;
