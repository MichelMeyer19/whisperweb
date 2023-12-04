// SendSvg.js
import React, { useState } from 'react';
import BackgroundMesh from '../BackgroundMesh';

const SendSvg = () => {
  const [fillColor, setFillColor] = useState('#000'); // Initial fill color

  // Function to update the fill color based on the dynamic color from BackgroundMesh
  const updateFillColor = (colorData) => {
    // Example: Extract the color information from the colorData
    const red = colorData[0];
    const green = colorData[1];
    const blue = colorData[2];

    // Example: Combine color components into a CSS-friendly string
    const newColor = `rgb(${red}, ${green}, ${blue})`;

    setFillColor(newColor);
  };

  console.log(typeof updateFillColor); // Check the type of updateFillColor

  return (
    <div>
      {/* Make sure the onColorChange prop is passed correctly */}
      <BackgroundMesh onColorChange={updateFillColor} />
      <svg width="34" height="38" viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.2983 20.6861C33.5308 19.8998 33.5308 18.1001 32.2983 17.3138L6.96871 1.15528C6.31268 0.736778 5.47347 0.736776 4.81744 1.15528L1.70186 3.14281C0.469367 3.92905 0.469366 5.72881 1.70186 6.51506L18.649 17.3261C19.8815 18.1124 19.8815 19.9121 18.649 20.6984L1.70936 31.5047C0.474987 32.2921 0.477306 34.0954 1.7137 34.8797L4.81873 36.8493C5.47426 37.2651 6.3112 37.264 6.96566 36.8465L32.2983 20.6861Z" 
          fill={fillColor} // Dynamically set the fill color
          stroke="#000" strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default SendSvg;
