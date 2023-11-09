import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton';
import contentPages from "../utils/ourValuesText.js"
import BackArrow from "../atoms/BackArrow";
import ProgressBar from "../atoms/ProgressBar";

export const OurValues = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const nextPage = () => {
    if (currentPage < contentPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate('/signin');
    }
  };

  const pageContent = contentPages[currentPage].content.map((item, index) => (
    <div key={index} className="content-section max-w-xs mx-auto my-4">
      <h2 className="text-headline text-lg font-semibold">{item.headline}</h2>
      <p className="text-content mt-2">{item.text}</p>
    </div>
  ));

  return (
    <div className="flex flex-col h-screen bg-dorian">
      <BackArrow />
      {/* Text content that is being updated. Not sure if this should be a component */}
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-title text-2xl font-bold mb-4">{contentPages[currentPage].title}</h1>
          <div className="text-center">
            {pageContent}
          </div>
        </div>
      </div>
      <ProgressBar steps={contentPages.length} currentStep={currentPage} />
      <div className="pb-8 w-full flex justify-center">
        <GenericButton
          text={currentPage === contentPages.length - 1 ? "Finish" : "Next"}
          onClick={nextPage}
          additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
        />
      </div>
    </div>
  );
};

export default OurValues;
