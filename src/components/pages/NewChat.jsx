// render the NewChat-page: the goal of this page is to allow the user to request new chats (either topic-specific of off-topic)

import React from "react";
import { useState, useEffect } from "react";
import Parse from "parse/dist/parse.min.js";

import PageHeadline from "../atoms/PageHeadline";

import { TopicSelection } from "../molecules/TopicSelection.jsx";
import { NewChatButton } from "../atoms/NewChatFunction.jsx";

export const NewChat = () => {
  // define state that contains most relevant topics >> and stores if the topic is clicked or not!
  const [topics, setTopics] = useState([]);
  // define state to show current user and therefore allow access to DB
  const [currentUser, setCurrentUser] = useState(null);

  // initiate a DB call on each first render of page
  useEffect(() => {
    // call function to retrieve topics to display on page from DB
    fetchTopics();
    // call function to retrieve current user
    getCurrentUser();
  }, []);

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  // function to retreive topics and create list of dictionaries (incl. topic_id and topic_name)
  async function fetchTopics() {
    // query DB to retrieve topics
    let parseQuery = new Parse.Query("Topics");

    try {
      let queryResults = await parseQuery.find();
      let fetchedTopicList = [];
      // Store results as list of dictionaries
      for (let result of queryResults) {
        fetchedTopicList.push({
          id: result.id,
          topic_name: result.get(["topic_name"]),
          isClicked: false,
        });
      }
      // set topics to fetched list
      setTopics(fetchedTopicList);
    } catch (error) {
      console.log("call failed!!!");
    }
  }

  return (
    <>
      <PageHeadline text="New Chat" />

      <div className="mt-10">
        <TopicSelection topics={topics} setTopics={setTopics} />
      </div>

      <div className="mt-10">
        <NewChatButton
          text="Request Themed Chat"
          topics={topics}
          currentUser={currentUser}
        />
        <NewChatButton
          text="Request General Chat"
          topics={""}
          currentUser={currentUser}
        />
      </div>
    </>
  );
};
