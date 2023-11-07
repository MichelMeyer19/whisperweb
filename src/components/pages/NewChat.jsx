import React from "react";

import {TopicList} from '../organisms/TopicList.jsx';
import newChatButton from "../atoms/newChatButton.jsx";

export const NewChat = () => {
  return (
    <>
      <h1>New Chat</h1>
      <main>
        <TopicList/>
        <div>
          {/* for some reasons those buttons are not rendered....*/}
          <newChatButton text="Request Themed Chat"/>
          <newChatButton text="Request General Chat"/>
        </div>
      </main>
    </>
  );
};
