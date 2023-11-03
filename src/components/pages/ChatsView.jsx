// components/pages/ChatsView.jsx

import React from "react";
import ChatMessageOverview from "../molecules/ChatMessageOverview";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";

export const ChatsView = () => {
  return (
    <Temp>
      <PageHeadline text="Chats" />
      <ChatMessageOverview
        topic="#Family"
        userName="Anonymous Cat"
        message="Templatet text Templatet text "
      />
      <ChatMessageOverview
        topic="General"
        userName="Anonymous Grasshopper"
        message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
      />
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
