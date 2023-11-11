// render the NewChat-page: the goal of this page is to allow the user to request new chats (either topic-specific of off-topic)

import React from "react";
import {useState, useEffect} from 'react';
import Parse from 'parse/dist/parse.min.js';

import {TopicSelection} from '../molecules/TopicSelection.jsx';
import {NewChatButton} from "../atoms/NewChatButton.jsx";


export const NewChat = () => {

  // define state that contains most relevant topics >> and stores if the topic is clicked or not!
  const [topics, setTopics] = useState([]);

  // initiate a DB call on each first render of page
  useEffect(() => {
    // call function to retrieve topics to display on page from DB
    fetchTopics();
  }, []);

  // function to retreive topics and create list of dictionaries (incl. topic_id and topic_name)
  async function fetchTopics() {

    // query DB to retrieve topics
    let parseQuery = new Parse.Query("Topics");
    let queryResults = await parseQuery.find();
    
    let fetchedTopicList = []

    // Store results as list of dictionaries
    for (let result of queryResults) {      
      fetchedTopicList.push({'id':result.id, 'topic_name':result.get(['topic_name']), 'isClicked':false})
    };

    // set topics to fetched list
    setTopics(fetchedTopicList)
  }

  return (
    <>
      <h1>New Chat</h1>
      <main>
        <div className="space-y-4">
          <TopicSelection 
          topics={topics} 
          setTopics={setTopics}/>

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
        </div>
      </main>
    </>
  );
};
