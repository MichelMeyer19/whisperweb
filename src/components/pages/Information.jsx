import { useState } from "react";
import PageHeadline from "../atoms/PageHeadline";
import InformationButton from "../atoms/InformationButton";
import LogoutButton from "../atoms/LogoutButton";
import initialInformation from "../utils/articles_information_page.json";

// Information Component
// This component manages a list of information cards, each represented by an InformationButton.
// It controls which card is expanded and passes dynamic content, including a sub-header, to each button.
export const Information = () => {
  // Assign a state variable where each information card's id is associated to a state (currently selected or not)
  const [infos, setInfos] = useState(initialInformation);

  function handleInfoClick(e) {
    // Get the id of the clicked information item
    const id = e.currentTarget.id;

    // Create new array with updated Infos by leveraging the JS map function
    const newInfos = infos.map((info) => {
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
    <div className="">
      {/* Page headline */}
      <PageHeadline text="Information" />
      <main className="flex flex-col items-center">
        {/* Mapping through each info item to create an InformationButton */}
        {infos.map((each) => (
          <div key={each.id} className="w-full flex justify-center">
            <InformationButton
              id={each.id}
              info_header={each.info_header}
              subHeader={each.subHeader} // Dynamic sub-header passed as a prop
              isClicked={each.isClicked}
              content={each.content}
              onClick={handleInfoClick}
            />
          </div>
        ))}
        <div className="w-full flex justify-center mt-4">
          {/* Logout Button */}
          <LogoutButton />
        </div>
      </main>
    </div>
  );
};
