import { useState } from 'react';
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import InformationButton from "../atoms/InformationButton";
import LogoutButton from "../atoms/LogoutButton";
import initialInformation from "../utils/articles_information_page.json"

// ChatGPT has been used to ensure that already open information cards will be closed when a new item is opened
export const Information = () => {

  // Assign a state variable where each information card's id is associated to a state (currently selected or not)
  const [infos, setInfos] = useState(initialInformation);

  function handleInfoClick(e) {
    
    // Get the id of the clicked information item
    const id = e.currentTarget.id;

    // Create new array with updated Infos by leveraging the JS map function
    const newInfos = infos.map(info => {
      if (info.id === id) {

        // If the item is already open, close it
        return { ...info, isClicked: !info.isClicked };
      } else {

        // If not, open it and close all other buttons by setting isClicked to false
        return { ...info, isClicked: false };
      }
    });
    
    // Update the state with the new information items
    setInfos(newInfos);
  }

  return (
    <div className=''>
      {/* Same formatting like other headers */} 
      <PageHeadline text="Information" />
      <main className="flex flex-col items-center">
        {infos.map((each) => (
          <div key={each.id} className="w-full flex justify-center">
            {/* Leverage InformationButton.jsx by forwarding the variables defined in the function expression above*/} 
            <InformationButton
              id={each.id}
              info_header={each.info_header}
              isClicked={each.isClicked}
              content={each.content}
              onClick={handleInfoClick}
            />
          </div>
        ))}
        <div className="w-full flex justify-center mt-4">
          {/* Leverage LogoutButton.jsx*/} 
          <LogoutButton />
        </div>
      </main>
    </div>
  );
};