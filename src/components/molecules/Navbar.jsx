// components/molecules/Navbar.jsx

import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../atoms/Icon";

const Navbar = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  // Log the current location whenever it changes
  useEffect(() => {
    console.log("Current Location:", location.pathname);
  }, [location.pathname]);

  // Function to determine if a NavLink is active based on the pathname
  const isActive = (pathname) => pathname === location.pathname;

  return (
    <nav className="flex justify-around items-center bg-white text-black fixed bottom-0 w-full p-5">
      {/* NavLink for navigating to "/new-chat" */}
      <NavLink to="/new-chat" end className="no-underline">
        {/* Icon component with a conditional source based on whether the NavLink is active */}
        <Icon
          src={
            isActive("/new-chat")
              ? "/icons/new-chat-chosen-black.png"
              : "/icons/new-chat.png"
          }
          alt="NewChat"
        />
      </NavLink>

      {/* NavLink for navigating to "/chats-overview" */}
      <NavLink to="/chats-overview" end className="no-underline">
        {/* Icon component with a conditional source based on whether the NavLink is active */}
        <Icon
          src={
            isActive("/chats-overview")
              ? "/icons/chats-chosen-black.png"
              : "/icons/chats.png"
          }
          alt="ChatsOverview"
        />
      </NavLink>

      {/* NavLink for navigating to "/information" */}
      <NavLink to="/information" end className="no-underline">
        {/* Icon component with a conditional source based on whether the NavLink is active */}
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
