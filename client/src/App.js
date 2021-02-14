import React, { useState } from "react";
import { Sidebar, RecipeCard } from "./components";
import recipes from "./recipes.js";
import "./styles.scss";

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  return (
    <div className="App">
      {/* <Sidebar recipeList={recipes} clickHandler={setSelectedRecipe} /> */}
      <RecipeCard recipe={selectedRecipe} />
    </div>
  );
}
