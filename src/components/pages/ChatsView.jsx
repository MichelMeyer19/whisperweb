import React from "react";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  // remember useEffect/async await function for monitoring serverside updates

  // Get the current user
  const currentUser = Parse.User.current();
  console.log(currentUser);

  // Create two queries to match either user_1 or user_2
  const queryUser1 = new Parse.Query("Chats").equalTo("user_1", currentUser.id);
  const queryUser2 = new Parse.Query("Chats").equalTo("user_2", currentUser.id);

  // Use Parse.Query.or to combine the two queries with an OR condition
  const chatsQuery = Parse.Query.or(queryUser1, queryUser2);

  // Execute the query to get the current user's chats
  chatsQuery
    .find()
    .then((chats) => {
      // Iterate through the array of chat objects
      chats.forEach((chat) => {
        const chatId = chat.id;

        // Query messages for the current chat
        const Messages = Parse.Object.extend("Messages");
        const messagesQuery = new Parse.Query(Messages);
        messagesQuery.equalTo("chat_id", chatId);

        // Execute the query to get messages for the current chat
        messagesQuery
          .find()
          .then((messages) => {
            // Log or process the messages for the current chat
            console.log("Messages for Chat:", chatId, messages);
          })
          .catch((error) => {
            console.error("Error fetching messages for chat:", chatId, error);
          });
      });
    })
    .catch((error) => {
      console.error("Error fetching chats:", error);
    });

  const chatMessages = [
    {
      id: 1,
      topic: "#Family",
      userName: "Anonymous Cat",
      message: "Template text Template text",
    },
    {
      id: 2,
      topic: "General",
      userName: "Anonymous Grasshopper",
      message:
        "Template text Template text Template text Template text Template text Template text Template text Template text Template text",
    },
  ];

  return (
    <Temp>
      <PageHeadline text="Chats" />
      <ChatBoxOverview chatMessages={chatMessages} />
    </Temp>
  );
};

export default ChatsView;
