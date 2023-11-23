import React from "react";
import {useState} from 'react';

// allows user to manually input a topic
// used in TopicList.jsx

export const ManualTopicInput = ({topics,setTopics}) => {

    const [newtopic, setNewTopic] = useState('');

    function handleTopicInput(e) {
        setNewTopic(e.target.value);
    }

    function handleNewTopicLog(e) {
        const old_topics = topics.map(topic => {
            if (topic.isClicked == true) {
                return {...topic, isClicked: false};
            } else {
                return topic;
            }
        });
        if (newtopic.length > 3) {
            const old_and_new_topics = old_topics.concat([{id:topics.length.toString(), topic_name:newtopic, isClicked:true}])
            setTopics(old_and_new_topics)
            setNewTopic('');
        } else {
            alert('New Topic needs to be of sufficient length (< 3 characters)')
            setTopics(old_topics)
        }
    }

    //items-center to center input field
    return (
        <div className="flex flex-col items-left">
            <div className="mx-2 flex ml-7">
                <input 
                    name="manualTopicInput" 
                    className="p-2 pl-1 text-sm text-gray-900 border border-gray-300 rounded-lg w-60" 
                    value={newtopic}
                    onChange={handleTopicInput}
                />
                <button className="bg-black text-white p-2 pl-1 rounded-lg w-20" onClick={handleNewTopicLog}>
                        Enter
                </button>
            </div>
        </div>
    );
};