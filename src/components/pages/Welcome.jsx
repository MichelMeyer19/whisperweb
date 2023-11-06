import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton';

export const Welcome = () => {
  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle "Our Values" button click
  const goToOurValues = () => {
      // For us to conside what our nesting structure should be?
      // At the moment we are now being directed to a completely new page
      // Question to consider: should this section be nested as welcome/ourvalues?
      navigate("./ourvalues") 
  };

  // Function to handle "Continue" button click
  const continueWithProcess = () => {
    navigate("/signin")
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <GenericButton 
        text="Our Values"
        additionalStyles="mb-4 text-black bg-white hover:bg-gray-200"
        onClick={goToOurValues}
      />
      <GenericButton 
        text="Continue"
        additionalStyles="text-white bg-green-500 hover:bg-green-600"
        onClick={continueWithProcess}
      />
    </div>
  );
};



