// components/atoms/Icon.jsx
import React from "react";


// This component is used for displaying icons throughout the application.
// It accepts 'src' (source URL of the icon) and 'alt' (alternative text) as props.
const Icon = ({ src, alt }) => {
  // ensuring the icon maintains its aspect ratio.
  return <img src={src} alt={alt} className="h-auto w-16" />;
};

export default Icon;
