import React, { useEffect, useState } from "react";
import PageHeadline from "../atoms/PageHeadline";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  const [chatsData, setChatsData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [openchatRequests, setOpenchatRequests] = useState([]);

  // query chats whenever the page reloads and at an interval of 30 seconds
  useEffect(() => {
    fetchChats(); // Initial fetch
    fetchopenchatRequests(); // Initial fetch

    const chatsInterval = setInterval(fetchChats, 60000); // Poll every 60 seconds

    // Cleanup on component unmount
    return () => clearInterval(chatsInterval);
  }, []);

  // whenever the chats are updated, also query for the first message per chat
  useEffect(() => {
    // query for first message per chat and update state
    getFirstMessagePerChat();
  }, [chatsData]);

  // define function to query all chats for current user
  const fetchChats = async function () {
    // Get the current user
    const currentUser = Parse.User.current();

    // Create a query to find chats where the current user is either user_1 or user_2
    const queryUser1 = new Parse.Query("Chats").equalTo(
      "user_1",
      currentUser.id
    );
    const queryUser2 = new Parse.Query("Chats").equalTo(
      "user_2",
      currentUser.id
    );
    const chatsQuery = Parse.Query.or(queryUser1, queryUser2);
    chatsQuery.include("user_1", "user_2");
    chatsQuery.descending("createdAt"); // Sort by createdAt in descending order

    const foundChats = await chatsQuery.find();

    // loop through query results and extract relevant data
    let fetchedChats = [];
    for (let result of foundChats) {
      let otherUser_id = null;
      let otherUser_info = null;
      let otherUser_name = null;
      let topic = false;
      // check if the current user is user_1 or user_2 in DB
      if (result.get("user_1").id === currentUser.id) {
        otherUser_id = result.get("user_2").id;
        otherUser_info = result.get("user_2");
        otherUser_name = otherUser_info.get("anonymous_username");
      } else {
        otherUser_id = result.get("user_1").id;
        otherUser_name = result.get("user_1").get("anonymous_username");
      }
      // check if chat is topic-specific or off-topic
      if (result.get("topic_chat") === true) {
        topic = result.get("topic_name");
      } else {
        topic = "Off-Topic";
      }
      fetchedChats.push({
        chat_id: result.id,
        current_user: currentUser.id,
        other_user_id: otherUser_id,
        other_user_name: otherUser_name,
        topic: topic,
      });
    }

    // update state with chats
    setChatsData(fetchedChats);
  };

  // define function to query all chats for current user
  const fetchopenchatRequests = async function () {
    // Get the current user
    const currentUser = Parse.User.current();
    console.log(currentUser.id);

    // create query to find existing chat requests
    const chatrequest_query = new Parse.Query("ChatRequest");
    chatrequest_query.equalTo("user", currentUser.id);
    chatrequest_query.equalTo("matched_request", false);
    chatrequest_query.descending("createdAt"); // Sort by createdAt in descending order

    const found_chat_request = await chatrequest_query.find();

    // loop through query results and extract relevant data
    let fetchedChatRequests = [];
    for (let result of found_chat_request) {
      let topic = false;
      // check if chat is topic-specific or off-topic
      if (result.get("topic_chat") === true) {
        topic = result.get("topic_name");
      } else {
        topic = "Off-Topic";
      }
      fetchedChatRequests.push({
        chat_id: result.id,
        current_user: currentUser.id,
        other_user_id: null,
        other_user_name: "awaiting match",
        topic: topic,
      });
    }
    console.log(fetchedChatRequests);
    // update state with chats
    setOpenchatRequests(fetchedChatRequests);
  };

  // define function to query for the first message of each chat
  const getFirstMessagePerChat = async function () {
    // loop through chats
    let allDataArr = [];
    for (let chat of chatsData) {
      // set up query to find the last message
      const queryMessage = new Parse.Query("Messages").equalTo(
        "chat_id",
        chat.chat_id
      );
      queryMessage.descending("createdAt"); // Sort by createdAt in descending order
      queryMessage.limit(1); // Limit to 1 result (the latest entry)

      const result = await queryMessage.first();

      // check if a message exists, otherwise show an empty string
      let message = "";
      if (result !== undefined) {
        message = result.get("text");
      }
      // extract data from the query output
      allDataArr.push({
        chat_id: chat.chat_id,
        current_user: chat.current_user,
        other_user_id: chat.other_user_id,
        other_user_name: chat.other_user_name,
        topic: chat.topic,
        first_message: message,
      });
    }
    console.log(allDataArr);

    // update state with queried information
    setAllData(allDataArr);
  };

  return (
    <div className="flex flex-col items-center min-w-full max-w-full h-full">
      <PageHeadline text="Chats" />
      <div className="flex flex-col items-center overflow-auto min-w-full max-w-full h-[76.5%]">
        {allData.map((chat) => (
          <div key={chat.chat_id} className="w-full max-w-md mb-1">
            {/* Set a fixed height for each ChatBoxOverview */}
            <ChatBoxOverview
              chatId={chat.chat_id}
              chatMessages={[
                {
                  id: chat.chat_id,
                  topic: chat.topic,
                  userName: chat.other_user_name,
                  message: chat.first_message,
                },
              ]}
            />
          </div>
        ))}
        {openchatRequests.map((chat) => (
          <div key={chat.chat_id} className="w-full max-w-md mb-1">
            {/* Set a fixed height for each ChatBoxOverview */}
            <ChatBoxOverview
              chatId={chat.chat_id}
              chatMessages={[
                {
                  id: chat.chat_id,
                  topic: chat.topic,
                  userName: "Pending chat request",
                  message: "",
                },
              ]}
              actual_chat={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsView;
