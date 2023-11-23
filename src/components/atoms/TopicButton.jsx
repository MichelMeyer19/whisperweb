// export button with topic based on topic state (white when unclicked, black when clicked)
// functionality to change topic state when clicked

import React from "react";

export const TopicButton = ({topics,setTopics}) => {

    // function that handles event of the topic button being clicked: 
    // 1. switches the isClicked boolean to true for the clicked topic
    // 2. unselects all other topics that might currently be selected (isClicked==true)
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

    // the function returns a list of topic-buttons and checks each of them for the isClicked boolean, in order to check if the button is selected or not
    return (
        <div className="flex justify-between flex-wrap mx-auto max-w-2xl p-2">
            {topics.map(each => 
                <button key={each.id} id={each.id} onClick={handleTopicButtonClick} className={each.isClicked?"bg-black text-white m-2 p-2 rounded-full":"bg-white border border-solid border-black m-2 p-2 rounded-full"}>
                    {each.topic_name}
                </button>
            )}
        </div>
    )
}