// components/molecules/Navbar/Navbar.jsx

import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../atoms/Icon";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Location:", location.pathname);
  }, [location.pathname]);

  const isActive = (pathname) => pathname === location.pathname;

  return (
    <nav className="flex justify-around items-center bg-white text-black fixed bottom-0 w-full p-5">
      <NavLink to="/newchat" end className="no-underline">
        <Icon
          src={
            isActive("/newchat")
              ? "/icons/new-chat-chosen.png"
              : "/icons/new-chat.png"
          }
          alt="NewChat"
        />
      </NavLink>

      <NavLink to="/chatsview" end className="no-underline">
        <Icon
          src={
            isActive("/chatsview")
              ? "/icons/chats-chosen.png"
              : "/icons/chats.png"
          }
          alt="ChatsView"
        />
      </NavLink>

      <NavLink to="/information" end className="no-underline">
        <Icon
          src={
            isActive("/information")
              ? "/icons/information-chosen.png"
              : "/icons/information.png"
          }
          alt="Information"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
