import React from "react";

const RecipeList = ({ recipeList, clickHandler, searchTerm }: any) => {
  const filteredRecipes = recipeList.filter((recipe: any) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="recipes">
      <ul>
        {filteredRecipes.map((recipe: any) => (
          <li onClick={() => clickHandler(recipe)}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
