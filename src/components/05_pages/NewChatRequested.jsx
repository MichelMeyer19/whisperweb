import React from "react";

// this page appears whenever a new chat was requested

export const NewChatRequested = () => {

  return (
    <>
      <h1>New Chat Requested</h1>
      <main>
        <div className="h-screen flex items-center justify-center">
          <div className="w-60">
            <p className="font-bold text-center">A Match is requested!</p>
            <p className="font-light text-center">In Case of an emergency, please feel free to read up on our information regarding student counselling at Copenhagen Universities in 'Information'</p>
          </div>
        </div>
      </main>
    </>
  );
};
