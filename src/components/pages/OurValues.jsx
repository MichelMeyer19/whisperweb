// Manifesto component that updates the text on the page based on the state

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton';


// This data could technically be in a separate file or folder called data or constants in the src folder
const contentPages = [
  {
    title: "Why WhisperWeb Exists",
    content: [
      "Authenticity Over Appearance",
      "Mental Well-being",
      "Breaking Down Barriers"
      // Add the rest of the content for the first page here
    ],
  },
  {
    title: "Our Hope for You",
    content: [
      "Discover & Grow",
      "Build Genuine Connections",
      "Empowerment"
      // Add the rest of the content for the second page here
    ],
  },
  {
    title: "Our Belief In Anonymity",
    content: [
      "Anonymity is not about hiding; it's about revealing.",
      // Add the rest of the content for the third page here
    ],
  },
];

export const OurValues = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  const nextPage = () => {
    if (currentPage < contentPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // Use navigate to redirect to the sign-in page
      navigate('/signin');
    }
  };

  const pageContent = contentPages[currentPage].content.map((text, index) => (
    <p key={index} className="text-content">
      {text}
    </p>
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <h1 className="text-title">{contentPages[currentPage].title}</h1>
      <div className="text-center">
        {pageContent}
      </div>
      <GenericButton
        text={currentPage === contentPages.length - 1 ? "Finish" : "Next"}
        onClick={nextPage}
      />
    </div>
  );
};

export default OurValues;
