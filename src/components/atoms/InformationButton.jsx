// atoms/InformationButton.jsx

import React from "react";

const InformationButton = ({
  id,
  info_header,
  isClicked,
  onClick,
  content,
}) => {
  
  // Base style
  const baseStyle = `
    bg-white
    text-left
    text-black
    py-4 px-4 w-80 text-sm font-bold
    rounded-[5px]
    border border-solid border-black rounded-[5px]
  `;

  // Sub-header style
  const subHeaderStyle = `
    block
    text-xs
    font-light
    mt-1
  `;

  // Handle click events
  const handleClick = (e) => {
    onClick(e);
  };

  // Render the styled button (using CSS Tailwind) and conditional (depending on click status) content below it
  return (
    <div className="info-button-container mb-4">
      <button
        className={baseStyle}
        onClick={handleClick}
        id={id}
      >
        {info_header}
        {/* Sub-header text */}
        <span className={subHeaderStyle}>Written by WhisperWeb</span>
      </button>
      {isClicked && (
        <div className="info-content bg-white py-2 px-4 w-80 mt-1 rounded-lg shadow-md text-black text-sm">
          {content}
        </div>
      )}
    </div>
  );
};

export default InformationButton;
