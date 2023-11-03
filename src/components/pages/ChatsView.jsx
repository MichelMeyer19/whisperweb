// // components/pages/ChatsView.jsx

// import React from "react";
// import ChatMessage from "../molecules/ChatMessage";
// import Temp from "../template/Temp";
// import PageHeadline from "../atoms/PageHeadline";

// export const ChatsView = () => {
//   return (
//     <Temp>
//       <PageHeadline text="Chats" />
//       {/*This is a simple way to demonstrate rendering the
//         ChatMessage component within the Chats page. In a
//         real-world scenario, you would likely fetch data dynamically
//         and map it to the ChatMessage component based on the actual
//         messages or conversations in your application.*/}
//       <ChatMessage
//         topic="#Family"
//         userName="Anonymous Cat"
//         message="Templatet text Templatet text "
//       />
//       <ChatMessage
//         topic="General "
//         userName="Anonymous Grasshopper"
//         message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
//       />
//     </Temp>
//   );
// };

// Import necessary components and modules from React and React Router
import { Link } from "react-router-dom";
import ChatMessage from "../molecules/ChatMessage";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";

export const ChatsView = () => {
  return (
    <Temp>
      <PageHeadline text="Chats" />
      {/* Wrap each ChatMessage in a Link component */}
      <Link to="/chat">
        <ChatMessage
          topic="#Family"
          userName="Anonymous Cat"
          message="Templatet text Templatet text "
        />
      </Link>
      <Link to="/chat">
        <ChatMessage
          topic="General "
          userName="Anonymous Grasshopper"
          message="Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text Templatet text"
        />
      </Link>
    </Temp>
  );
};
