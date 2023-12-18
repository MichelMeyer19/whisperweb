// utils/truncateText.js
// Truncate a given string to a specified maximum length.

const truncateText = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

export default truncateText;
