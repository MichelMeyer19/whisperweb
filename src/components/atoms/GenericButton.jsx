// The button will accept text, additional styles, and an onClick function as props

const GenericButton = ({ text, additionalStyles, onClick }) => {
  return (
    <button
      onClick={onClick}
      // Combine the base styles with any additional styles passed via props
      className={`py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${additionalStyles}`}
    >
      {text}
    </button>
  );
};

export default GenericButton;
