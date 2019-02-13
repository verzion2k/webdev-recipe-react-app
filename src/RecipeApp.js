import React, { Component } from "react";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import "./RecipeApp.css";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe
          title="Spaghetti"
          ingredients={["pasta", "8 cups water", "1 box spaghetti"]}
          instructions="Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce."
          img="spaghetti.jpeg"
        />
        <Recipe
          title="Milkshake"
          ingredients={["2 Scoops Ice Cream", "8 ounces milk"]}
          instructions="Combine ice cream and milk. Blend until creamy."
          img="milkshake.jpeg"
        />
        <Recipe
          title="Avocado Toast"
          ingredients={[
            "2 slices of bread",
            "1 avocado",
            "1 tablespoon olive oil",
            "1 pinch of salt",
            "pepper"
          ]}
          instructions="Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste."
          img="avocado-toast.jpeg"
        />
      </div>
    );
  }
}

export default RecipeApp;
