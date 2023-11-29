import React, { useEffect, useState } from "react";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  const [chatsData, setChatsData] = useState([]);
  const [allData, setAllData] = useState([]);

  // query chats, whenerver the page reloads
  useEffect(() => {
    // query existing chats for user and update state
    fetch_chats();
  }, []);

  // whenever the chats are updated, also query for the first message per chat
  useEffect(() => {
    // query for first message per chat and update state
    GetFirstMessagePerChat();
  }, [chatsData]);

  // define function to query all chats for current user
  const fetch_chats = async function () {
    // Get the current user
    const currentUser = Parse.User.current();
    console.log(currentUser.id);

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

    const found_chats = await chatsQuery.find();

    // loop through query results and extract relevant data
    let fetchedChats = [];
    for (let result of found_chats) {
      let other_user = null;
      let topic = false;
      // check if current user as user_1 or user_2 in DB
      if (result.get("user_1").id == currentUser.id) {
        other_user = result.get("user_2").id;
      } else {
        other_user = result.get("user_1").id;
      }
      // check if chat is topic-specific or off-topic
      if (result.get("topic_chat") == true) {
        topic = result.get("topic_name");
      } else {
        topic = "Off-Topic";
      }
      fetchedChats.push({
        chat_id: result.id,
        current_user: currentUser.id,
        other_user: other_user,
        topic: topic,
      });
    }

    // update state with chats
    setChatsData(fetchedChats);
  };

  // define function to query for the first message of each chat
  const GetFirstMessagePerChat = async function () {
    // loop through chats
    let all_data = [];
    for (let chat of chatsData) {
      // set up query to find last message
      const query_message = new Parse.Query("Messages").equalTo(
        "chat_id",
        chat.chat_id
      );
      query_message.descending("createdAt"); // Sort by createdAt in descending order
      query_message.limit(1); // Limit to 1 result (the latest entry)

      const result = await query_message.first();

      // check if a message exists, otherwise show an empty string
      let message = "";
      if (result != undefined) {
        message = result.get("text");
      }
      // extract data from query output
      all_data.push({
        chat_id: chat.chat_id,
        current_user: chat.current_user,
        other_user: chat.other_user,
        topic: chat.topic,
        first_message: message,
      });
    }

    // update state with queried information
    setAllData(all_data);
  };

  return (
    <Temp>
      <PageHeadline text="Chats" />

      {allData.map((chat) => (
        <ChatBoxOverview
          key={chat.chat_id}
          chatId={chat.chat_id} // Pass the chatId to ChatBoxOverview
          chatMessages={[
            {
              id: chat.chat_id,
              topic: chat.topic,
              userName: chat.other_user,
              message: chat.first_message,
            },
          ]}
        />
      ))}
    </Temp>
  );
};

export default ChatsView;
