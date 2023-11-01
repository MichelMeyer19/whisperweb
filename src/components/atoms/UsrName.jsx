// components/atoms/UsrName.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const UsrName = ({ text }) => {
  const truncatedText = truncateText(text, 50); // Set your desired character limit

  return <p className="font-sans text-base text-onyx">{truncatedText}</p>;
};

export default UsrName;
