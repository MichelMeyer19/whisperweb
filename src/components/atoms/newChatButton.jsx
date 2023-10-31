// components/atoms/newChatButton.jsx
import React from "react";

//function newChatButton() {
const NewChatButton = ({text,topics}) => {

  function handleTopicChatRequestButton(e) {

    if (topics == '') {
      alert('create general chat')
    } else {
      let current_selected_topic = topics.filter(t => t.isClicked==true)[0];

      if (current_selected_topic != undefined) {
          console.log(current_selected_topic)
          alert('create chat with topic: '+current_selected_topic.topic_name)
      }
      else {
          alert('no topic currently selected')
      }
    }
  }

  return (
    <button onClick={handleTopicChatRequestButton} className="button requestbutton">
      {text}
    </button>
  );
};

export default NewChatButton;