import React from "react";

import {TopicButton} from "../atoms/TopicButton.jsx";
import { ManualTopicInput } from "./ManualTopicInput.jsx";

// organism that populates a list of toics to be selected
// additionally allows user to manually input a topic

export const TopicList = ({topics,setTopics}) => {
    
    return (
        <div className="space-y-4">
            <TopicButton
                topics={topics}
                setTopics={setTopics}
            />
            <ManualTopicInput
                topics={topics}
                setTopics={setTopics}
            />
        </div>
    )
};


//export {TopicList}