// components/atoms/BackArrow.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

// create BackArrow component
const BackArrow = () => {
  const navigate = useNavigate();

  // handle back arrow click
  const handleBackArrowClick = () => {
    navigate(-1);
  };

  return (
    <div className="w-11/12 mt-4 ml-5">
      <div className="w-fit cursor-pointer" onClick={handleBackArrowClick}>
        <img src="/icons/goBack.svg" alt="Go Back" className="w-2 h-auto" /> {/* Adjusted width to w-2 */}
      </div>
    </div>
  );
};

export default BackArrow;
