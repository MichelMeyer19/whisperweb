import React from "react";
import { useLocation } from 'react-router-dom';

// this page appears whenever a new chat was requested

export const NewChatRequested = () => {

  // check for url
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);

  // check if last 4 chars are true, if so return slightly different page
  const lastFourChars = currentUrl.slice(-4);
  if (lastFourChars == 'true') {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="mt-60">
          <div className="flex justify-center">
            <div className="w-60">
              <p className="font-bold text-center">You have a new connection!</p>
              <p className="font-light text-center">Please find your new chat in your chats page</p>
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

  // if not, return this page
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mt-50">
        <div className="flex justify-center">
          <div className="w-60">
            <p className="font-bold text-center">A match is requested!</p>
            <p className="font-light text-center">In case of an emergency, please feel free to read up on our information regarding student counselling at Copenhagen Universities in 'Information'</p>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <img 
            src={"/icons/arrow_down.png"} 
            alt={"Arrow_Down"} 
          />
        </div> */}
      </div>
    </div>
  );
};
