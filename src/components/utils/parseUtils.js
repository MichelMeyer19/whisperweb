// Create a utility file, e.g., parseUtils.js
import Parse from "parse/dist/parse.min.js";

export const fetchChatsForUser = async (userId) => {
  try {
    const user = new Parse.User();
    user.id = userId;

    const userChatsQuery = new Parse.Query('Chats');
    userChatsQuery.equalTo('user_1', user);
    userChatsQuery.include('user_1');
    userChatsQuery.include('user_2');
    
    const userChats = await userChatsQuery.find();
    return userChats;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};
