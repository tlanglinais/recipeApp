import React, {useState} from 'react';
import {Recipe} from '@/types/Recipe';
import RecipeCard from './components/RecipeCard/RecipeCard';
import recipes from './recipes';
import './styles.scss';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(recipes[0]);

  return (
    <div className="App">
      {/* <Sidebar recipeList={recipes} clickHandler={setSelectedRecipe} /> */}
      <RecipeCard recipe={selectedRecipe} />
    </div>
  );
}
