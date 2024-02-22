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
    <div className="rellax card shadow-2 ma w-50 center" data-rellax-speed="7">
      <h3 className="Title f2">
        <b>{recipeData.strMeal}</b>
      </h3>
      <div className="container">
        <div className="containerLeft">
          <img
            src={recipeData.strMealThumb}
            height="350px"
            alt={recipeData.strMeal}
            className="br4 grow bw2 ba"
          />
          <h3>{recipeData.strCategory}</h3>
          <a
            href={recipeData.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="Lien f3"
          >
            Voir la Recette
          </a>
        </div>
        <div className="containerRight b">
          <p>{recipeData.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
