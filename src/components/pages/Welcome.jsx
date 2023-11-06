import GenericButton from '../atoms/GenericButton';

export const Welcome = () => {
  // Function to handle "Our Values" button click
  const goToOurValues = () => {
    window.location.href = 'https://example.com/our-values'; // replace with your actual URL
  };

  // Function to handle "Continue" button click
  const continueWithProcess = () => {
    // Logic to continue with the process
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
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



