import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton';

export const Welcome = () => {
  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle "Our Values" button click
  const goToOurValues = () => {
    navigate("/welcome/our-values"); 
  };

  // Function to handle "Continue" button click
  const continueWithProcess = () => {
    navigate("/sign-in");
  };
    
  return (
    <div className="flex flex-col h-screen bg-dorian">
      {/* Top header container */}
      <div className="w-full pt-8 text-center">
        <h1 className="text-lg mb-2">WhisperWeb</h1>
      </div>

      {/* Content container */}
      <div className="flex-grow flex flex-col items-center justify-end">
        {/* Centered text paragraph with 100px margin-bottom */}
        <div className="w-72 mb-25 text-center" style={{ width: '294px', marginBottom: '100px' }}>
          <p>WhisperWeb is an anonymous messaging app for university students that want to connect with like-minded people to share what's on their mind for people to grow</p>
        </div>
      </div>

      {/* Bottom buttons container */}
      <div className="flex flex-col items-center justify-end w-full pb-8">
        <GenericButton 
          text="Our Values"
          additionalStyles="mb-4 text-black bg-white hover:bg-gray-200 text-sm"
          onClick={goToOurValues}
        />
        <GenericButton 
          text="Continue"
          additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
          onClick={continueWithProcess}
        />
      </div>
    </div>
  );
};
