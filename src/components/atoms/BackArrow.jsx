import React from "react";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-11/12 mt-4 ml-5"> {/* Added ml-4 (left margin) */}
      <div className="w-fit cursor-pointer" onClick={goBack}>
        <img src="/icons/goBack.svg" alt="Go Back" className="w-4 h-auto" />
      </div>
    </div>
  );
};

export default BackArrow;
