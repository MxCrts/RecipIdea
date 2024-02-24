import React, { useEffect } from "react";
import "./Card.css";
import Rellax from "rellax";

const Card = ({ recipeData }) => {
  useEffect(() => {
    // Initialize Rellax for parallax effect
    new Rellax(".rellax", {
      // You can add options here
      speed: -2,
      center: false,
    });

    // Cleanup function to destroy Rellax instance on component unmount
    return () => {
      if (this.rellax) this.rellax.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="card rellax shadow-2 ma w-50 center" data-rellax-speed="7">
      <h3 className="Title f2">
        <b>{recipeData.title}</b>
      </h3>
      <img
        src={recipeData.image}
        alt={recipeData.title}
        className="br4 grow bw6 shadow-5"
      />
      <div className="Ingredient mt3">
        <h3 className="f3 underline">Ingredients</h3>
        <ul className="ingredients-grid">
          {recipeData.extendedIngredients.map((ingredient, index) => (
            <li key={index}>
              <span className="b f4  pa2 mt2">
                {ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}
              </span>{" "}
              -{" "}
              <span className="f5 b">{ingredient.measures.metric.amount}</span>
              {ingredient.measures.metric.unitShort}
            </li>
          ))}
        </ul>
      </div>
      <div className="Instructions ma3 pa mt3">
        <h3 className="f3 underline">Instructions</h3>
        <ol>
          {recipeData.analyzedInstructions[0].steps.map((ins, index) => (
            <li key={index}>
              <span className="f4">{ins.step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
