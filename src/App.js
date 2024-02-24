import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import SignIn from "./components/SignIn/SignIn";
import Navigation from "./components/Navigation/Navigation";
import RecipeButton from "./components/RecipeButton/RecipeButton";
import Card from "./components/Card/Card";
import FridgeCard from "./components/FridgeCard/FridgeCard";
import NoteBook from "./components/NoteBook/NoteBook";
import FridgeButton from "./components/FridgeButton/FridgeButton";
import images from "./images";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDataFetched: false,
      recipeData: null,
      notebookInputs: [],
      lastButtonClicked: null,
    };
  }

  updateNotebookInputs = (input) => {
    const inputsArray = input.split(",").map((ingredient) => ingredient.trim());
    this.setState({ notebookInputs: inputsArray });
  };

  onButtonSubmit = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data);
        // Ensure that data.recipes and data.recipes[0] exist before updating state
        if (data.recipes && data.recipes.length > 0) {
          this.setState({ recipeData: data.recipes[0], isDataFetched: true });
        } else {
          throw new Error("No recipes found in the response.");
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle or display the error appropriately
        // For example, you might want to update the state to show an error message
      });
    this.setState({ lastButtonClicked: "recipe" });
  };

  onFridgeButtonSubmit = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data);
        // Ensure that data.recipes and data.recipes[0] exist before updating state
        if (data.results && data.results.length > 0) {
          this.setState({ recipeData: data.results[0], isDataFetched: true });
        } else {
          throw new Error("No recipes found in the response.");
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle or display the error appropriately
        // For example, you might want to update the state to show an error message
      });
    this.setState({ lastButtonClicked: "fridge" });
  };

  render() {
    const { isDataFetched, recipeData, notebookInputs, lastButtonClicked } =
      this.state;
    return (
      <div className="App tc">
        <div className="header tc">
          <Logo />
          <h1 className="f1">RecipIdea</h1>
        </div>
        {isDataFetched ? (
          <>
            {lastButtonClicked === "recipe" && <Card recipeData={recipeData} />}
            {lastButtonClicked === "fridge" && (
              <FridgeCard recipeData={recipeData} />
            )}
          </>
        ) : (
          <div className="MainContainer">
            <div className="left">
              <RecipeButton
                buttonText="Fais moi Rêver ..."
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.random}
              />
              <RecipeButton
                buttonText="Envie de Viande ?"
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548&include-tags=meats"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.viande}
              />
              <RecipeButton
                buttonText="Envie de Poisson ?"
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548&include-tags=fish"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.poisson}
              />
              <RecipeButton
                buttonText="Plutôt Végétarien ?"
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548&include-tags=vegetarian"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.vegetarien}
              />
              <RecipeButton
                buttonText="Plutôt Végétalien ?"
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548&include-tags=vegan"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.vegetalien}
              />
              <RecipeButton
                buttonText="Plutôt Sucré ?"
                fetchUrl="https://api.spoonacular.com/recipes/random?apiKey=151e529e2ddf4587897dded6f08bb548&include-tags=dessert"
                onButtonSubmit={this.onButtonSubmit}
                backgroundImage={images.dessert}
              />
            </div>
            <div className="right">
              <FridgeButton
                buttonText="Tu as quoi dans ton frigo ?"
                ingredients={notebookInputs}
                onButtonSubmit={this.onFridgeButtonSubmit}
                apiKey="6eea49630443486cb22cbee929c5c78e"
                backgroundImage={images.frigo}
              />
              <NoteBook updateNotebookInputs={this.updateNotebookInputs} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
