import React, { useState, useEffect } from "react";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import { fetchChatsForUser } from "../utils/parseUtils";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  const [chats, setChats] = useState([]);
  console.log(Parse.User.current());
  useEffect(() => {
    const fetchUserChats = async () => {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          const userChats = await fetchChatsForUser(currentUser.id);
          setChats(userChats);
        }
      } catch (error) {
        console.error("Error fetching user chats:", error);
      }
    };

    fetchUserChats();
  }, []);

  return (
    <div className="flex flex-col items-center w-11/12 bg-transparent m-2 p-4 overflow-y-auto h-full">
      {chats.map((chat, index) => (
        <ChatBoxOverview key={index} {...chat.attributes} />
      ))}
    </div>
  );
};

export default ChatsView;

// components/pages/ChatsView.jsx

// import React from "react";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";
// import ChatBoxOverview from "../organisms/ChatBoxOverview";

// export const ChatsView = () => {
//   const chatMessages = [
//     {
//       id: 1,
//       topic: "#Family",
//       userName: "Anonymous Cat",
//       message: "Template text Template text",
//     },
//     {
//       id: 2,
//       topic: "General",
//       userName: "Anonymous Grasshopper",
//       message:
//         "Template text Template text Template text Template text Template text Template text Template text Template text Template text",
//     },
//   ];

//   return (
//     <Temp>
//       <PageHeadline text="Chats" />
//       <ChatBoxOverview chatMessages={chatMessages} />
//     </Temp>
//   );
// };

// export default ChatsView;
