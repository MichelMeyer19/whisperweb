import React from "react";

// export button with topic based on topic state
// functionality to change topic state when clicked

export const TopicButton = ({topics,setTopics}) => {

    function handleTopicButtonClick(e) {
        
        const nextTopics = topics.map(topic => {
            if (topic.id === e.currentTarget.id) {
                if (topic.isClicked == true) {
                    return {...topic, isClicked: false}
                } else {
                    return {...topic, isClicked: true};    
                }
            } else {
                return {...topic, isClicked: false};
            }
        });
        setTopics(nextTopics);
    }

    return (
        <div>
            {topics.map(each => 
                <button key={each.id} id={each.id} onClick={handleTopicButtonClick} className={each.isClicked?"bg-black text-white m-2 p-2 rounded-full":"bg-white m-2 p-2 rounded-full"}>
                    {each.topic_name}
                </button>
            )}
        </div>
    )
}