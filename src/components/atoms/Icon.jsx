// components/atoms/Icon.jsx

import React from "react";

const Icon = ({ src, alt }) => {
  return <img src={src} alt={alt} className="h-auto w-16" />;
};

export default Icon;