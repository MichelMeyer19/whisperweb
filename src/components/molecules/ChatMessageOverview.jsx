// components/molecules/ChatMessageOverview.jsx

import React from "react";
import { Link } from "react-router-dom";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessageOverview = ({ topic, userName, message }) => {
  return (
    <div className="m-5 min-w-min w-11/12 max-w-4xl">
      <Link to="/chat">
        <div className="flex flex-col items-start bg-dorian p-5 rounded shadow-lg">
          <TopicText text={topic} />
          <UsrName text={userName} />
          <div className="line-clamp-1">
            <MsgText text={message} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatMessageOverview;

// the following code is for when we have a backend implemented

// import React from "react";
// import { Link } from "react-router-dom";
// import TopicText from "../atoms/TopicText";
// import UsrName from "../atoms/UsrName";
// import MsgText from "../atoms/MsgText";

// const ChatMessageOverview = ({ topic, userName, message, chatId }) => {
//   // Assuming you have a unique chatId associated with each chat

//   return (
//     <Link to={`/chat/${chatId}`} className="w-11/12 max-w-4xl">
//       <div className="flex flex-col items-start justify-center bg-white m-5 p-5 rounded shadow-lg">
//         <TopicText text={topic} />
//         <UsrName text={userName} />
//         <div className="line-clamp-1">
//           <MsgText text={message} />
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ChatMessageOverview;
