// components/atoms/TopicText.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const TopicText = ({ text, actual_chat }) => {
  const truncatedText = truncateText(text, 40); // Set your desired character limit
  if (actual_chat === false) {
    return (
      <h3 className="font-bold text-xl text-lightSlate leading-tight">
        {truncatedText}
      </h3>
    );
  }
  return (
    <h3 className="font-bold text-xl text-onyx leading-tight">
      {truncatedText}
    </h3>
  );
};

export default TopicText;
