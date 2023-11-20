// button to request a new chat
// used in NewChat.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js';
import GenericButton from "./GenericButton";

export const NewChatButton = ({text,topics,currentUser}) => {

  const navigateTo = useNavigate();

  // function that handles button press
  function handleTopicChatRequestButton(e) {

    // check if a user is logged in: if not, throw an error-message, otherwise continue
    if (currentUser == null) {
      alert('please log in to be able to request a new chat :)')
    } else {

      // check if a general or topic-chat is requested
      if (topics == '') {

        // a general-chat is requested!!
        // call function to handle the necessary DB changes
        doDBchangesforchatrequest(currentUser, false, null)
      } else {

        // a topic-chat is requested!!
        // get current topic list and check if one topic is selected, otherwise throw an error-message
        let current_selected_topic = topics.filter(t => t.isClicked==true)[0];
        if (current_selected_topic == undefined) {
          alert('no topic currently selected')
        }
        else {
          // call function to handle the necessary DB changes
          doDBchangesforchatrequest(currentUser, true, current_selected_topic.topic_name)
        }
      }
    }
  };

  // create function that holds the logic for the DB update
  const doDBchangesforchatrequest = async function (user,topic_chat,topic) {
    
    let existing_requests = await fetch_chat_requests(user,topic_chat,topic)

    if (existing_requests.length == 0) {
      // if no matching request exists, create new chat request
      add_chat_requests(user,topic_chat,topic)

      const newPath = '/newchatrequested';
      navigateTo(newPath);
    } else {
      // create a new chat
      let existing_user = existing_requests[0].get(['user'])
      add_new_chat(user,topic_chat,topic,existing_user)
      // set existing chat request to 'done'
      set_chat_request_to_done(existing_requests)

      const newPath = '/newchatrequested';
      navigateTo(newPath);
    }
  };

  // function to fetch existing chat-requests in the DB
  const fetch_chat_requests = async function (user,topic_chat,topic) {
    
    // create query to find existing chat requests
    const chatrequest_query = new Parse.Query('ChatRequest');
    chatrequest_query.equalTo('topic_name', topic);
    chatrequest_query.equalTo('topic_chat', topic_chat);
    chatrequest_query.equalTo('matched_request', false);

    try {
      let queryResults = await chatrequest_query.find();

      return queryResults;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // function to add a chat-request in the DB
  const add_chat_requests = async function (user,topic_chat,topic) {

    // create new object in table 'ChatRequest'
    let chatrequest = new Parse.Object('ChatRequest');
    chatrequest.set('user', user);
    chatrequest.set('topic_chat', topic_chat);
    chatrequest.set('topic_name', topic);
    chatrequest.set('matched_request', false);
    
    try {
      // store information to DB
      await chatrequest.save();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // function to add a new chat in the DB in case a similar request does already exist
  const add_new_chat = async function (user_current, topic_chat, topic, user_2) {

    // create new object in table 'Chats'
    let newchat = new Parse.Object('Chats');
    newchat.set('user_1', user_2);
    newchat.set('topic_chat', topic_chat);
    newchat.set('topic_name', topic);
    newchat.set('user_2', user_current);
    
    try {
      // store information to DB
      await newchat.save();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // function to set an existing chat request to 'done'
  const set_chat_request_to_done = async function (found_chat_request) {

    // change the matched_request boolean for the given chat request
    found_chat_request[0].set('matched_request',true);
    
    try {
      // store changes to DB
      await found_chat_request[0].save();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div className="container py-2 px-4 flex flex-col items-center">
      <GenericButton
        text={text}
        additionalStyles="bg-black text-white"
        onClick={handleTopicChatRequestButton}
      />
    </div>
  );
};


