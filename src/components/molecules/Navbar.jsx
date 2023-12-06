import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../atoms/Icon";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Location:", location.pathname);
  }, [location.pathname]);

  const isActive = (pathname) => pathname === location.pathname;

  // // Conditionally render the Navbar based on the route
  // if (location.pathname === "/chat") {
  //   return null; // Return null if on the chat page
  // }

  return (
    <nav className="flex justify-around items-center bg-white text-black fixed bottom-0 w-full p-5">
      <NavLink to="/new-chat" end className="no-underline">
        <Icon
          src={
            isActive("/new-chat")
              ? "/icons/new-chat-chosen-black.png"
              : "/icons/new-chat.png"
          }
          alt="NewChat"
        />
      </NavLink>

      <NavLink to="/chats-overview" end className="no-underline">
        <Icon
          src={
            isActive("/chats-overview")
              ? "/icons/chats-chosen-black.png"
              : "/icons/chats.png"
          }
          alt="ChatsOverview"
        />
      </NavLink>

      <NavLink to="/information" end className="no-underline">
        <Icon
          src={
            isActive("/information")
              ? "/icons/information-chosen-black.png"
              : "/icons/information.png"
          }
          alt="Information"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
