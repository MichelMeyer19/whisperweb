// components/atoms/TopicText.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const TopicText = ({ text }) => {
  const truncatedText = truncateText(text, 40); // Set your desired character limit

  return (
    <h2 className="font-bold text-3xl text-onyx leading-tight">
      {truncatedText}
    </h2>
  );
};

export default TopicText;
