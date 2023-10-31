import {useState} from 'react';
import NewChatButton from "../atoms/newChatButton";

let initialTopics = [
    {id: "0", topic_name: "Family Relationships", isClicked: false},
    {id: "1", topic_name: "Anxiety", isClicked: false},
    {id: "2", topic_name: "Stress", isClicked: false},
    {id: "3", topic_name: "Imposter Syndrome", isClicked: false},
    {id: "4", topic_name: "Future", isClicked: false},
    {id: "5", topic_name: "Friends", isClicked: false},
    {id: "6", topic_name: "University", isClicked: false},
    {id: "7", topic_name: "Career", isClicked: false},
    {id: "8", topic_name: "Counselling", isClicked: false},
    {id: "9", topic_name: "Dating", isClicked: false},
    {id: "10", topic_name: "Self Care", isClicked: false},
    {id: "11", topic_name: "Homesickness", isClicked: false},
    {id: "12", topic_name: "Self-Image", isClicked: false},
    {id: "13", topic_name: "Clubs", isClicked: false},
    {id: "14", topic_name: "Campus Life", isClicked: false}
];

//function TopicList() {
export const TopicList = () => {

    const [topics, setTopics] = useState(initialTopics);
    const [newtopic, setNewTopic] = useState('');

    function handleTopicButtonClick(e) {
        alert(e.currentTarget.id)

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

    function handleTopicInput(e) {
        console.log(e.target.value);
        console.log(e.target.value.length);

        setNewTopic(e.target.value);
    }

    function handleNewTopicLog(e) {
        alert(newtopic)
        const old_topics = topics.map(topic => {
            if (topic.isClicked == true) {
                return {...topic, isClicked: false};
            } else {
                return topic;
            }
        });
        const old_and_new_topics = old_topics.concat([{id:topics.length.toString(), topic_name:newtopic, isClicked:true}])
        setTopics(old_and_new_topics)
        
        console.log(topics)
    }
    
    return (
        <>
            <div class="topics">
                {topics.map(each => 
                        <button id={each.id} onClick={handleTopicButtonClick} class={each.isClicked?"button topicButtonclicked":"button topicButton"}>
                            {each.topic_name}
                        </button>
                    )}
            </div>
            <div>
                <input onChange={handleTopicInput}/>
                <button onClick={handleNewTopicLog}>log new topic</button>
            </div>
            <div>
                 <NewChatButton
                    text = "Request Themed Chat"
                    topics = {topics}
                />
                <NewChatButton
                    text = "Request General Chat"
                    topics = {''}
                />
             </div>
        </>
    )
};


//export {TopicList}