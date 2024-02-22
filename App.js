import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import SignIn from "./components/SignIn/SignIn";
import Navigation from "./components/Navigation/Navigation";
import RecipeButton from "./components/RecipeButton/RecipeButton";
import Card from "./components/Card/Card";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDataFetched: false,
      recipeData: null,
    };
  }
  onButtonSubmit = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ recipeData: data.meals[0], isDataFetched: true });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { isDataFetched, recipeData } = this.state;
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {isDataFetched ? (
          <Card recipeData={recipeData} />
        ) : (
          <RecipeButton onButtonSubmit={this.onButtonSubmit} />
        )}
      </div>
    );
  }
}

export default App;
