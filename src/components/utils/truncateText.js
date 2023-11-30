// utils/truncateText.js
const truncateText = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

export default truncateText;
