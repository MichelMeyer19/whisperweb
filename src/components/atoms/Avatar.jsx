// components/atoms/Avatar.jsx

import React from "react";

// create Avatar component
const Avatar = ({ src }) => {
  return (
    <div className="chat-image avatar">
      <div className="w-8 rounded-full">
        <img src={src} alt="User Avatar" />
      </div>
    </div>
  );
};

export default Avatar;
