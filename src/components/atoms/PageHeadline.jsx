// components/atoms/PageHeadline.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const PageHeadline = ({ text }) => {
  const truncatedText = truncateText(text, 40); // Set your desired character limit

  return (
    <div className="flex flex-col items-center m-45 max-w-5xl pt-10 mb-8">
      <h1 className="font-bold text-3xl text-onyx leading-tight">
        {truncatedText}
      </h1>
    </div>
  );
};

export default PageHeadline;
