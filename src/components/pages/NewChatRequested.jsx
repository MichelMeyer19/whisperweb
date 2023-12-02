import React from "react";
import { useLocation } from 'react-router-dom';

// this page appears whenever a new chat was requested

export const NewChatRequested = () => {

  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);

  const lastFourChars = currentUrl.slice(-4);

  if (lastFourChars == 'true') {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="mt-80">
          <div className="flex justify-center">
            <div className="w-60">
              <p className="font-bold text-center">You could be matched!</p>
              <p className="font-light text-center">Please find your new Chat on your Chat Page here.</p>
            </div>
          </div>
  
          <div className="flex justify-center">
            <img 
              src={"/icons/arrow_down.png"} 
              alt={"Arrow_Down"} 
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mt-80">
        <div className="flex justify-center">
          <div className="w-60">
            <p className="font-bold text-center">A Match is requested!</p>
            <p className="font-light text-center">In Case of an emergency, please feel free to read up on our information regarding student counselling at Copenhagen Universities in 'Information'</p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={"/icons/arrow_down.png"} 
            alt={"Arrow_Down"} 
          />
        </div>
      </div>
    </div>
  );
};
