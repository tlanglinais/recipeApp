import React from "react";

const RecipeList = ({ recipeList, clickHandler, searchTerm }) => {
  const filteredRecipes = recipeList.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="recipes">
      <ul>
        {filteredRecipes.map((recipe) => (
          <li onClick={() => clickHandler(recipe)}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
