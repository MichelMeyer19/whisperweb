import {useState} from 'react';

const TopicSelector = ({ topic, isClicked }) => {
    const [clicks, setClicks] = useState(0)

    function handleButtonPress(e) {
        setClicks(clicks + 1);
    }

    if (clicks % 2 != 0) {
        isClicked = true

        // add unselection of other buttons in here!
    } else {isClicked = false}
    
    let buttonClass = isClicked?"button topicButtonclicked":"button topicButton"

    console.dir(topic)
    return(
            <button onClick={handleButtonPress} class={buttonClass}>
                {topic}
            </button>
    )
};
  
export default TopicSelector;