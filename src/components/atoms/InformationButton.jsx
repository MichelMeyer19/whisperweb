import React from 'react';

// Function expression that takes variables specified in InformationView.jsx
const InformationButton = ({ id, info_header, isClicked, onClick, content }) => {
  
  // Handles click events
  const handleClick = (e) => {
    onClick(e);
  };

  // Renders the styled button (using CSS Tailwind) and conditional (depending on click status) content below it
  return (
    // Area for title of info button
    <div className="info-button-container flex flex-col items-center mb-2">
      <button
        className="info-button bg-white text-left text-black font-bold py-8 px-4 w-96 text-xl rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        onClick={handleClick}
        id={id}
      > 
        {info_header}
      {/* Area for content, which will be shown only under the condition that the user selected the specific info button */}
      </button>
      {isClicked && (
        <div className="info-content bg-white py-2 px-4 w-96 mt-1 rounded-lg shadow-md text-black">
          {content}
        </div>
      )}
    </div>
  );
};

// Export and make available in InformationView.jsx
export default InformationButton;