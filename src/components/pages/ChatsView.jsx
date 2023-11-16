import React from "react";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  // Remember useEffect/async await function for monitoring serverside updates

  // Get the current user
  const currentUser = Parse.User.current();

  // Create two queries to match either user_1 or user_2
  const queryUser1 = new Parse.Query("Chats").equalTo("user_1", currentUser.id);
  const queryUser2 = new Parse.Query("Chats").equalTo("user_2", currentUser.id);

  // Use Parse.Query.or to combine the two queries with an OR condition
  const chatsQuery = Parse.Query.or(queryUser1, queryUser2);

  // // Execute the query to get the current user's chats
  // chatsQuery
  //   .find()
  //   .then((chats) => {
  //     // Iterate through the array of chat objects
  //     chats.forEach((chat) => {
  //       const chatId = chat.id;

  //       // Query messages for the current chat
  //       const Messages = Parse.Object.extend("Messages"); // Check if the class name is 'Messages' or 'Message'
  //       const messagesQuery = new Parse.Query(Messages);
  //       messagesQuery.equalTo("chat_id", chatId);

  //       // Execute the query to get messages for the current chat
  //       messagesQuery
  //         .find()
  //         .then((messages) => {
  //           // Iterate through the array of message objects
  //           messages.forEach((message) => {
  //             // Access and log the text property for each message
  //             console.log("Text for Chat:", chatId, message.get("text"));
  //           });
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching messages for chat:", chatId, error);
  //         });
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching chats:", error);
  //   });

  const chatIdToQuery = "GZ5ktynaEz"; // Replace with the actual chat ID you want to query

  // Create a query for messages based on the chat ID
  const Messages = Parse.Object.extend("Messages");
  const messagesQuery = new Parse.Query(Messages);
  messagesQuery.equalTo("chat_id", chatIdToQuery);

  // Execute the query to get messages for the specified chat ID
  messagesQuery
    .find()
    .then((messages) => {
      // Log or process the messages for the specified chat ID
      messages.forEach((message, index) => {
        console.log(`Message ${index + 1}: ${message.get("text")}`);
      });
    })
    .catch((error) => {
      console.error("Error fetching messages for chat:", chatIdToQuery, error);
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
