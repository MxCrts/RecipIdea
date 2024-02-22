import React from "react";

const RecipeButton = ({ onButtonSubmit }) => {
  return (
    <div>
      <button
        className="br3 grow f3 link ph3 pv2 dib black pointer bg-yellow"
        onClick={onButtonSubmit}
      >
        Show me Some Recipes !!!
      </button>
    </div>
  );
};

export default RecipeButton;
