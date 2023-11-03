// components/molecules/ChatMessageOverview.jsx

import React from "react";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessageOverview = ({ topic, userName, message }) => {
  return (
    <div className="flex flex-col items-start justify-center bg-white m-5 p-5 rounded w-11/12 max-w-4xl h-32 max-h-32 shadow-lg">
      <TopicText text={topic} />
      <UsrName text={userName} />
      <div className="line-clamp-1">
        <MsgText text={message} />
      </div>
    </div>
  );
};

export default ChatMessageOverview;

//ChatMessageOverview.jsx;

// import React from "react";
// import { Link } from "react-router-dom";
// import TopicText from "../atoms/TopicText";
// import UsrName from "../atoms/UsrName";
// import MsgText from "../atoms/MsgText";

// const ChatMessageOverview = ({ chatId, topic, userName, message }) => {
//   return (
//     <Link to={`/chat/${chatId}`}>
//       <div className="flex flex-col items-start justify-center bg-white m-5 p-5 rounded w-11/12 max-w-4xl h-32 max-h-32 shadow-lg">
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
