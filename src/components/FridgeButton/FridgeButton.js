import React, { Component } from "react";

const FridgeButton = ({
  buttonText,
  backgroundImage,
  ingredients,
  onButtonSubmit,
}) => {
  // Construct the fetch URL dynamically based on the ingredients
  const constructFetchUrl = () => {
    const apiKey = "151e529e2ddf4587897dded6f08bb548"; // Use your actual API key
    const baseUrl =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKey;
    const ingredientsQuery = ingredients.join(",");
    return `${baseUrl}&addRecipeInformation=true&includeIngredients=${ingredientsQuery}`;
  };

  const fetchUrl = constructFetchUrl();

  const handleClick = () => {
    onButtonSubmit(fetchUrl);
  };

  const backgroundImageStyle = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`;
  const style = {
    background: backgroundImageStyle,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="button-container">
      <button
        className="recipe-button grow shadow-2 f2 br4"
        onClick={handleClick}
        style={style}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FridgeButton;
