// atoms/GenericButton.jsx

const GenericButton = ({ text, additionalStyles, onClick, type = "button"}) => {

  // Define a base style for the button including text styling
  const baseStyle = `
    w-[200px] h-[49px] flex-shrink-0
    border border-solid border-black rounded-[5px]
    py-2 px-4 font-semibold
    uppercase
    text-xs
  `;

  // Combine base style with any additional styles passed in
  const combinedStyles = `${baseStyle} ${additionalStyles}`;

  return (
    <button
      type={type} // 'type' can be 'button', 'submit', or 'reset'
      onClick={onClick}
      className={combinedStyles}
    >
      {text}
    </button>
  );
};

export default GenericButton;
