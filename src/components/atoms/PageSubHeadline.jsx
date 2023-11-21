// components/atoms/PageHeadline.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const PageSubHeadline = ({ text }) => {
  const truncatedText = truncateText(text, 40); // Set your desired character limit

  return (
    <div className="flex flex-col items-left m-1 ml-7 max-w-5xl">
      <h1 className="font-bold text-1xl text-onyx leading-tight">
        {truncatedText}
      </h1>
    </div>
  );
};

export default PageSubHeadline;
