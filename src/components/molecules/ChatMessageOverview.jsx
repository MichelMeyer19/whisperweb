// components/molecules/ChatMessageOverview.jsx

import React from "react";
import { Link } from "react-router-dom";
import TopicText from "../atoms/TopicText";
import UsrName from "../atoms/UsrName";
import MsgText from "../atoms/MsgText";

const ChatMessageOverview = ({ topic_name, user_1, user_2 }) => {
  const otherUser = user_1.id === Parse.User.current().id ? user_2 : user_1;

  return (
    <div className="m-2 min-w-min w-11/12 max-w-4xl">
      <Link to="/chat">
        <div className="flex flex-col items-start bg-dorian p-5 rounded shadow-lg">
          <TopicText text={topic_name} />
          <UsrName text={otherUser.get("username")} />
          {/* Assuming there is a field 'text' in your Message class */}
          <div className="line-clamp-1">
            <MsgText text="Latest message text here" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatMessageOverview;

// components/molecules/ChatMessageOverview.jsx

// import React from "react";
// import { Link } from "react-router-dom";
// import TopicText from "../atoms/TopicText";
// import UsrName from "../atoms/UsrName";
// import MsgText from "../atoms/MsgText";

// const ChatMessageOverview = ({ topic, userName, message }) => {
//   return (
//     <div className="m-2 min-w-min w-11/12 max-w-4xl">
//       <Link to="/chat">
//         <div className="flex flex-col items-start bg-dorian p-5 rounded shadow-lg">
//           <TopicText text={topic} />
//           <UsrName text={userName} />
//           <div className="line-clamp-1">
//             <MsgText text={message} />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ChatMessageOverview;
