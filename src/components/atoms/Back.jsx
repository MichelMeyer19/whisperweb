// components/atoms/Back.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/chatsview");
  };

  return (
    <div className="p-3 cursor-pointer" onClick={goBack}>
      <img src="/icons/goBack.svg" alt="Go Back" />
    </div>
  );
};

export default Back;
