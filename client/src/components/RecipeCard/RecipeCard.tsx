import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faWindowClose,
  faCaretSquareDown,
} from '@fortawesome/free-solid-svg-icons';
import {Recipe} from '@/types/Recipe';
import './RecipeCard.scss';

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({recipe}: Props) => {
  const [mode, setMode] = useState(0);

  // const calculateTotalTime = (prepTime, cookTime) => { }

  return (
    <div className={`recipe${true ? ' selected' : ''}`}>
      <div className="recipe__front">
        <div className="recipe__front-info">
          <h3 className="recipe__name">{recipe.name}</h3>
          <div className="recipe__total-time">
            {`Time: ${recipe.cookTime.value + recipe.prepTime.value}`}
          </div>
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
        <div className="recipe__ingredients">
          <button type="button" className="recipe__mode">
            {'->'}
          </button>
          <h3 className="recipe__name">Ingredients</h3>

          <table>
            <tbody>
              {recipe.ingredients.map(ing => (
                <tr
                  // onMouseOver={(e) => clickHandler(ing.name)}
                  // onMouseLeave={(e) => clickHandler("")}
                  className="recipe__ingredient"
                  key={ing.name}
                  // data-name={ing.name}
                >
                  <td>
                    {/* {ing.name === hoverName && (
                    <span className="recipe__ingredient--menu icon">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        color="#6930c3"
                        className="recipe__ingredient--menu-add icon"
                        onClick={() =>
                          console.log("Added to shopping list.")
                        }
                      />
                      <FontAwesomeIcon
                        icon={faCaretSquareDown}
                        color="#6930c3"
                        className="recipe__ingredient--menu-close icon"
                        onClick={() => clickHandler("")}
                      />
                    </span>
                  )} */}
                    <span>{ing.name}</span>
                  </td>
                  <td>{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="recipe__back-right">hello</div> */}

      {/* <div class="date">
        <p>{new Date().toLocaleDateString()}</p>
      </div> */}
      {/* <section className="recipe__side recipe__side--left">
        <div className="container">
          <h3 className="recipe__name">{recipe.name}</h3>
          <table>
            <tbody>
              <tr className="recipe__prep-time">
                <td>Prep Time:</td>
                <td>30min</td>
              </tr>
              <tr className="recipe__cook-time">
                <td>Cook Time:</td>
                <td>30min</td>
              </tr>
              <tr className="recipe__servings">
                <td>Servings:</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="recipe__side recipe__side--right">
        <div className="container">
          <h3 className="recipe__name">Ingredients</h3>
          <div class="ingredients">
            <table>
              <tbody>
                {recipe.ingredients.map((ing) => (
                  <tr
                    onMouseOver={(e) => clickHandler(ing.name)}
                    onMouseLeave={(e) => clickHandler("")}
                    className="recipe__ingredient"
                    key={ing.name}
                    name={ing.name}
                  >
                    <td>
                      {ing.name === hoverName && (
                        <span className="recipe__ingredient--menu icon">
                          <FontAwesomeIcon
                            icon={faPlusSquare}
                            color="#6930c3"
                            className="recipe__ingredient--menu-add icon"
                            onClick={() =>
                              console.log("Added to shopping list.")
                            }
                          />
                          <FontAwesomeIcon
                            icon={faCaretSquareDown}
                            color="#6930c3"
                            className="recipe__ingredient--menu-close icon"
                            onClick={() => clickHandler("")}
                          />
                        </span>
                      )}
                      <span>{ing.name}</span>
                    </td>
                    <td>{ing.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default RecipeCard;
