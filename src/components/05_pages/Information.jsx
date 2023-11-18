import React from "react";
import {useState} from 'react';

let initialInformations = [
  {id: "0", info_header: "Good Ways to disagree", isClicked: false},
  {id: "1", info_header: "Asking the right questions", isClicked: false},
  {id: "2", info_header: "Not being stressed by this app", isClicked: false},
  {id: "3", info_header: "Creating safe spaces", isClicked: false}
];

export const Information = () => {

  const [infos, setInfos] = useState(initialInformations);

  function handleInfoClick(e) {
    console.log('clicked button: '+e.currentTarget.id)
    const new_info_buttons = infos.map(info => {
      if (infos.id === e.currentTarget.id) {
          return {...info, isClicked: true};
      } else {
          return info;
      };
    });
    setInfos(new_info_buttons)
  };
  
  return (
  <>
    <h1>
      Information
    </h1>
    <main>
      {infos.map(each => 
        <div>
          <button id={each.id} onClick={handleInfoClick} class={"button topicButton"}>
            {each.info_header}
          </button>
        </div>
      )}
    </main>
  </>
  );
};