// components/pages/ChatsView.jsx

import { Link } from "react-router-dom";
import ChatMessageOverview from "../molecules/ChatMessageOverview";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";

export const ChatsView = () => {
  return (
    <Temp>
      <PageHeadline text="Chats" />
      {/* Wrap each ChatMessageOverview in a Link component */}
      <Link to="/chat">
        <ChatMessageOverview
          topic="#Family"
          userName="Anonymous Cat"
          message="Templatet text Templatet text "
        />
      </Link>
      <Link to="/chat">
        <ChatMessageOverview
          topic="General "
          userName="Anonymous Grasshopper"
          message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
        />
      </Link>
    </Temp>
  );
};

// // components/pages/ChatsView.jsx

// import React from "react";
// import ChatMessageOverview from "../molecules/ChatMessageOverview";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";

// export const ChatsView = () => {
//   return (
//     <Temp>
//       <PageHeadline text="Chats" />
//       {/*This is a simple way to demonstrate rendering the
//         ChatMessageOverview component within the Chats page. In a
//         real-world scenario, you would likely fetch data dynamically
//         and map it to the ChatMessageOverview component based on the actual
//         messages or conversations in your application.*/}
//       <ChatMessageOverview
//         topic="#Family"
//         userName="Anonymous Cat"
//         message="Templatet text Templatet text "
//       />
//       <ChatMessageOverview
//         topic="General "
//         userName="Anonymous Grasshopper"
//         message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
//       />
//     </Temp>
//   );
// };

// Import necessary components and modules from React and React Router
