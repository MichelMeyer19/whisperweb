// this component combines the list of topics-buttons and the manual input field for new topic creation

import React from "react";

import { TopicButton } from "../atoms/TopicButton.jsx";
import { ManualTopicInput } from "./ManualTopicInput.jsx";

// organism that populates a list of toics to be selected
// additionally allows user to manually input a topic

export const TopicSelection = ({ topics, setTopics }) => {
  return (
    <div className="space-y-4">
      <TopicButton topics={topics} setTopics={setTopics} />
      <ManualTopicInput topics={topics} setTopics={setTopics} />
    </div>
  );
};
