// atoms/LogoutButton.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import GenericButton from "./GenericButton";

const LogoutButton = () => {
  const navigate = useNavigate();

  async function doUserLogOut() {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        return true;
      } else {
        alert(`Error! ${error.message}`);
        return false;
      }
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  }

  async function handleLogout() {
    // Call the doUserLogOut function to log the user out
    const loggedOut = await doUserLogOut();

    // Check if the user was successfully logged out
    if (loggedOut) {
      // Navigate to the sign-in screen (assuming the route is '/sign-in')
      navigate("/sign-in");
    } else {
      // Handle the case where logout failed, if needed
      // You can show an error message to the user here
      window.alert("Log out failed.");
    }
  }

  return (
    <GenericButton
      text="Log Out"
      // additionalStyles="bg-black text-white"
      onClick={handleLogout}
    />
  );
};

export default LogoutButton;
