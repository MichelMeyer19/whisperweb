// components/atoms/newChatButton.jsx
import React from "react";

const newChatButton = ({ text }) => {

  function handleTopicChatButtonPress(e) {
    alert('reached');
  }

  return (

    <button onClick={handleTopicChatButtonPress} className="button requestbutton">
      {text}
    </button>
  );
};

export default newChatButton;