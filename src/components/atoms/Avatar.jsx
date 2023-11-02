// components/atoms/Avatar.jsx

import React from "react";

const Avatar = ({ src }) => {
  return (
    <div className="avatar">
      <div className="w-10 rounded-full">
        <img src={src} alt="User Avatar" />
      </div>
    </div>
  );
};

export default Avatar;
