// import React, {useState} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {
//   faPlusSquare,
//   faWindowClose,
//   faCaretSquareDown,
// } from '@fortawesome/free-solid-svg-icons';
// import {Recipe} from '@/types/Recipe';
// import './RecipeCard.scss';
// import Pill from '../common/Pill/Pill';

// interface Props {
//   recipe: Recipe;
// }

// const RecipeCard = ({recipe}: Props) => {
//   const [mode, setMode] = useState(0);

//   // const calculateTotalTime = (prepTime, cookTime) => { }

//   return (
//     <div className={`recipe${true ? ' selected' : ''}`}>
//       <div className="recipe__front">
//         <div className="recipe__front-info">
//           <h2 className="recipe__name">{recipe.name}</h2>
//           <h3 className="recipe__total-time">
//             {`Time: ${recipe.cookTime.value + recipe.prepTime.value}`}
//           </h3>
//         </div>
//         <div className="recipe__image">
//           <img
//             src="https://images.unsplash.com/photo-1606101206245-adebf963b569?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
//             alt="stuff"
//           />
//           <span className="recipe__type">{recipe.type}</span>
//         </div>
//       </div>

//       <div className="recipe__back-right">
//         <div className="recipe__ingredients">
//           {/* <button type="button" className="recipe__mode">
//             {'->'}
//           </button> */}
//           <h3 className="recipe__name">Ingredients</h3>

//           {recipe.ingredients.map(ing => (
//             <Pill key={ing.name} text={`${ing.amount} ${ing.name}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faWindowClose,
  faCaretSquareDown,
} from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'types/Recipe';
import { Transition } from 'react-transition-group';
import Pill from '../common/Pill/Pill';
import './RecipeCard.scss';

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  const [open, setOpen] = useState(false);

  // const calculateTotalTime = (prepTime, cookTime) => { }

  return (
    <div
      className={`recipe${true ? ' selected' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={() => setOpen(!open)}
      onClick={() => setOpen(!open)}
    >
      <div className="recipe__front">
        <div className="recipe__front-info">
          <h2 className="recipe__name">{recipe.name}</h2>
          <h3 className="recipe__total-time">
            {`Time: ${recipe.cookTime.value + recipe.prepTime.value}`}
          </h3>
        </div>
        <div className="recipe__image">
          <img
            src="https://images.unsplash.com/photo-1606101206245-adebf963b569?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt="stuff"
          />
          <span className="recipe__type">{recipe.type}</span>
        </div>
      </div>

      <div className="recipe__back-right">
        {recipe.steps.map(step => (
          <li>{step}</li>
        ))}
      </div>

      <div className="recipe__back-left">
        <div className="recipe__ingredients">
          {/* <button type="button" className="recipe__mode">
            {'->'}
          </button> */}
          <h3 className="recipe__name">Ingredients</h3>
          {recipe.ingredients.map(ing => (
            <Pill key={ing.name} text={`${ing.amount} ${ing.name}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
