import React, { useEffect } from "react";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import Back from "../atoms/Back";
import ChatBox from "../organisms/ChatBox";

export const Chat = () => {
  // const [messages, setMessages] = useState([]);

  // useEffect(()=>{
  //   fetch('endpoint/mesages').then((response) => setMessages(response))
  // },[])
  return (
    <Temp>
      <Back />
      <PageHeadline text="#ChosenOne" />
      <ChatBox />
    </Temp>
  );
};

export default Chat;

// // components/pages/Chat.jsx
// import React from "react";
// import ChatBox from "../organisms/ChatBox";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";
// import Back from "../atoms/Back";

// export const Chat = () => {
//   const chatMessages = [
//     {
//       isStart: true,
//       userName: "Obi-Wan Kenobi",
//       time: "12:45",
//       message: "You were the Chosen One!",
//       isDelivered: true,
//       isSeen: false,
//       avatarSrc: "/icons/obi.webp",
//     },
//     {
//       isStart: false,
//       userName: "Anakin",
//       time: "12:46",
//       message: "I hate you!",
//       isDelivered: false,
//       isSeen: true,
//       avatarSrc: "/icons/anakin.webp",
//     },
//     {
//       isStart: true,
//       userName: "Obi-Wan Kenobi",
//       time: "12:47",
//       message: "...",
//       isDelivered: true,
//       isSeen: false,
//       avatarSrc: "/icons/obi.webp",
//     },
//     {
//       isStart: false,
//       userName: "Anakin",
//       time: "12:48",
//       message: "!",
//       isDelivered: false,
//       isSeen: true,
//       avatarSrc: "/icons/anakin.webp",
//     },
//     {
//       isStart: false,
//       userName: "Anakin",
//       time: "12:48",
//       message: "!",
//       isDelivered: false,
//       isSeen: true,
//       avatarSrc: "/icons/anakin.webp",
//     },
//     {
//       isStart: false,
//       userName: "Anakin",
//       time: "12:48",
//       message: "!",
//       isDelivered: false,
//       isSeen: true,
//       avatarSrc: "/icons/anakin.webp",
//     },
//     // Add more chat messages as needed -> perhaps an array of chats with unique id's?
//   ];

//   return (
//     <Temp>
//       <Back />
//       <PageHeadline text="#ChosenOne" />
//       <ChatBox chatMessages={chatMessages} />
//     </Temp>
//   );
// };
