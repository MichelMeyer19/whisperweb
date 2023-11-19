import React, { useState } from 'react';
import Temp from "../template/Temp";
import PageHeadline from "../atoms/PageHeadline";
import InformationButton from "../atoms/InformationButton";
import LogoutButton from "../atoms/LogoutButton";

// Declare the 4 pieces of information incl. title and content. Content has been prompted and written by ChatGPT.
let initialInformations = [
  {
    id: "0",
    info_header: "Good Ways to Disagree",
    content: (
      <p>
        Remember, it's completely okay to see things differently. The key to a healthy
        disagreement is to listen actively and respond with respect. Try using phrases
        like "I see your point, but have you considered..." or "I understand where
        you're coming from, however...". It's not about winning; it's about understanding
        each other better. 🤝
      </p>
    ),
    isClicked: false
  },
  {
    id: "1",
    info_header: "Asking the Right Questions",
    content: (
      <p>
        Curiosity is your superpower! Asking the right questions opens doors to better
        insights and connections. Keep them open-ended, think "What", "How", and "Why".
        For example, "What are your thoughts on..." or "How do you feel about...".
        This invites fuller responses and shows you're genuinely interested. 🔍
      </p>
    ),
    isClicked: false
  },
  {
    id: "2",
    info_header: "Not Being Stressed by This App",
    content: (
      <p>
        Feeling overwhelmed? Take a moment to breathe. 🌬️ Our app is here to make life
        easier, not harder. Navigate at your own pace, explore features as you feel
        comfortable, and remember, we are here to support you, not add to your stress.
        If you're feeling stuck, reach out to us - we've got your back!
      </p>
    ),
    isClicked: false
  },
  {
    id: "3",
    info_header: "Creating Safe Spaces",
    content: (
      <p>
        You're in a judgement-free zone. 🛖 Creating safe spaces is about being inclusive,
        respectful, and kind. It's a shared effort to ensure everyone feels heard and
        valued. Let's be mindful of the words we use and the support we offer. Together,
        we can make this space a little haven for all of us.
      </p>
    ),
    isClicked: false
  }
];

// ChatGPT has been used to ensure that already open information cards will be closed when a new item is opened
export const Information = () => {

  // Assign a state variable where each information card's id is associated to a state (currently selected or not)
  const [infos, setInfos] = useState(initialInformations);

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
    <Temp>
      
      {/* Same formatting like other headers */} 
      <PageHeadline text="Information" />
      <main className="w-full flex flex-col items-center">
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
    </Temp>
  );
};