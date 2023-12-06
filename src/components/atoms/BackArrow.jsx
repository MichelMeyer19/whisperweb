import React from "react";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-11/12 mt-4 ml-5">
      <div className="w-fit cursor-pointer" onClick={goBack}>
        <img src="/icons/goBack.svg" alt="Go Back" className="w-2 h-auto" /> {/* Adjusted width to w-2 */}
      </div>
    </div>
  );
};

export default BackArrow;
