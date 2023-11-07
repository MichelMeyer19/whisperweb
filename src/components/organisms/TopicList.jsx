import TopicSelector from '../atoms/TopicSelector.jsx'

function TopicList() {

    let topics = [
        {topic: "Family Relationships", isClicked: false},
        {topic: "Anxiety", isClicked: false},
        {topic: "Stress", isClicked: false},
        {topic: "Imposter Syndrome", isClicked: false},
        {topic: "Future", isClicked: false},
        {topic: "Friends", isClicked: false},
        {topic: "University", isClicked: false},
        {topic: "Career", isClicked: false},
        {topic: "Counselling", isClicked: false},
        {topic: "Dating", isClicked: false},
        {topic: "Self Care", isClicked: false},
        {topic: "Homesickness", isClicked: false},
        {topic: "Self-Image", isClicked: false},
        {topic: "Clubs", isClicked: false},
        {topic: "Campus Life", isClicked: false}
    ]

    return (
        <>
            <div class="topics">
                {topics.map(each => 
                        <TopicSelector topic={each.topic} isClicked={each.isClicked}/>
                    )}
            </div>
        </>
    )
}


export {TopicList}