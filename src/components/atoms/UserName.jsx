// components/atoms/UsrName.jsx
import React from "react";
import truncateText from "../utils/truncateText";

const UserName = ({ text, additionalStyle }) => {
  // Ensure that the text is a string before truncating
  const username = typeof text === "string" ? text : "";

  // Truncate the username if needed
  const truncatedText = truncateText(username, 50); // Set your desired character limit

  return <p className={`font-sans text-sm ${additionalStyle}`}>{truncatedText}</p>;
};

export default UserName;
