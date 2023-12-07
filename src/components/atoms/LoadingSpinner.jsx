import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-lightSlate"></div>
    </div>
  );
};

export default LoadingSpinner;
