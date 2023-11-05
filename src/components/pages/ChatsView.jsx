// components/pages/ChatsView.jsx

import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";

export const ChatsView = () => {
  const chatMessages = [
    {
      id: 1,
      topic: "#Family",
      userName: "Anonymous Cat",
      message: "Template text Template text",
    },
    {
      id: 2,
      topic: "General",
      userName: "Anonymous Grasshopper",
      message:
        "Template text Template text Template text Template text Template text Template text Template text Template text Template text",
    },
    // Add more chat messages as needed
  ];

  return (
    <Temp>
      <PageHeadline text="Chats" />
      {/* Map through the array of chat messages and render ChatMessageOverview components */}
      {chatMessages.map((chat) => (
        <ChatMessageOverview
          key={chat.id}
          topic={chat.topic}
          userName={chat.userName}
          message={chat.message}
        />
      ))}
    </Temp>
  );
};

// the following code is for when we have a backend implemented

// import React from "react";
// import ChatMessageOverview from "../molecules/ChatMessageOverview";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";

// export const ChatsView = () => {
//   return (
//     <Temp>
//       <PageHeadline text="Chats" />
//       <ChatMessageOverview
//         topic="#Family"
//         userName="Anonymous Cat"
//         message="Templatet text Templatet text "
//         chatId="1"  // Replace with the actual chat ID
//       />
//       <ChatMessageOverview
//         topic="General"
//         userName="Anonymous Grasshopper"
//         message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
//         chatId="2"  // Replace with the actual chat ID
//       />
//     </Temp>
//   );
// };
