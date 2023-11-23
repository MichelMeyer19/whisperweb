import React, { useEffect, useState } from "react";
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import ChatBoxOverview from "../organisms/ChatBoxOverview";
import Parse from "parse/dist/parse.min.js";

export const ChatsView = () => {
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
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

    // Execute the query to get the current user's chats
    chatsQuery
      .find()
      .then((chats) => {
        // Fetch details for each chat
        const chatDetailsPromises = chats.map((chat) => {
          // Create a query for messages based on the chat ID
          const Messages = Parse.Object.extend("Messages");
          const messagesQuery = new Parse.Query(Messages);
          messagesQuery.equalTo("chat_id", chat.id);
          messagesQuery.ascending("createdAt"); // Fetch messages in ascending order
          // Fetch all messages for the current chat
          return messagesQuery.find().then((messages) => {
            // Get the most recent message
            const latestMessage = messages[messages.length - 1];

            // Access the other user's ID in the chat
            const otherUserId =
              chat.get("user_1") != currentUser.id
                ? chat.get("user_2")
                : chat.get("user_1");

            // Fetch the other user's details
            const User = Parse.Object.extend("_User");
            const otherUserQuery = new Parse.Query(User);
            return otherUserQuery.get(otherUserId).then((otherUser) => {
              // Access the other username
              const otherUsername = otherUser.get("username");
              // Return the chat details with the other user's username and the latest message
              return {
                id: chat.id,
                topic: chat.get("topic_name"),
                userName:
                  latestMessage.get("sent_by_id").id === currentUser.id
                    ? currentUser.get("username")
                    : otherUsername,
                message: latestMessage ? latestMessage.get("text") : "",
              };
            });
          });
        });

        // Execute all chat details queries concurrently
        return Promise.all(chatDetailsPromises);
      })
      .then((chatsDetails) => {
        // Reverse the order of the chat details
        const reversedChatsDetails = chatsDetails.reverse();
        // Set the chat data in the state
        setChatsData(reversedChatsDetails);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <Temp>
      <PageHeadline text="Chats" />
      {chatsData.map((chat) => (
        <ChatBoxOverview
          key={chat.id}
          chatId={chat.id} // Pass the chatId to ChatBoxOverview
          chatMessages={[
            {
              id: chat.id,
              topic: chat.topic,
              userName: chat.userName,
              message: chat.message,
            },
          ]}
        />
      ))}
    </Temp>
  );
};

export default ChatsView;
