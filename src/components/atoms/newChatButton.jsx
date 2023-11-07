import React from "react";
import { useNavigate } from "react-router-dom";

// button to request a new chat
// used in NewChat.jsx

export const NewChatButton = ({text,topics}) => {

  const navigateTo = useNavigate();

  function handleTopicChatRequestButton(e) {

    if (topics == '') {
      alert('create general chat')

      const newPath = '/newchatrequested';
      navigateTo(newPath);

    } else {
      let current_selected_topic = topics.filter(t => t.isClicked==true)[0];

      if (current_selected_topic != undefined) {
          console.log(current_selected_topic)
          alert('create chat with topic: '+current_selected_topic.topic_name)
          const newPath = '/newchatrequested';
          navigateTo(newPath);
      }
      else {
          alert('no topic currently selected')
      }
    }
  }

  return (
    <div className="container py-2 px-4 flex flex-col items-center">
    
      <button className="bg-black text-white p-2 rounded" onClick={handleTopicChatRequestButton}>
        {/*<Link to="/newchatrequested">{text}</Link>*/}
        {text}
      </button>
    </div>
  );
};
