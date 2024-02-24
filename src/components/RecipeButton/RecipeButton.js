import React from "react";
import "./RecipeButton.css"; // Make sure the CSS file is correctly imported

const RecipeButton = ({
  onButtonSubmit,
  buttonText,
  fetchUrl,
  backgroundImage,
}) => {
  const backgroundImageStyle = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`;

  const style = {
    background: backgroundImageStyle,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleClick = () => {
    onButtonSubmit(fetchUrl);
  };

  return (
    <div className="button-container">
      <button
        className="recipe-button grow shadow-2 f2 br4 "
        onClick={handleClick}
        style={style}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default RecipeButton;
