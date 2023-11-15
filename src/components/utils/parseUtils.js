// Create a utility file, e.g., parseUtils.js
import Parse from "parse/dist/parse.min.js";

export const fetchChatsForUser = async (userId) => {
  try {
    const user = new Parse.User();
    user.id = userId;

    const userChatsQuery = new Parse.Query('Chats');
    userChatsQuery.equalTo('user1', user);
    userChatsQuery.include('user1');
    userChatsQuery.include('user2');
    
    const userChats = await userChatsQuery.find();
    return userChats;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};
