const GenericButton = ({
  text,
  additionalStyles,
  onClick,
  type = "button",
}) => {
  // Determine if the text length is over 13 characters
  const isLongText = text.length > 13;

  // Define a base style for the button including text styling
  const baseStyle = `
    w-[200px] h-[49px] flex-shrink-0
    border border-solid border-black rounded-[5px]
    py-2 px-4 font-semibold
    uppercase
    ${isLongText ? "text-xs" : "font-size: 12px;"} 
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
