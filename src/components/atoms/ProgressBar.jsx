// This component is used in the login flow
// as a way to inform the user of which step they are in the OurValues 
// flow

const ProgressBar = ({ steps, currentStep }) => {
    return (
      <div className="flex justify-center my-4">
        {Array.from({ length: steps }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-8 mx-1 rounded ${
              index <= currentStep ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

export default ProgressBar;