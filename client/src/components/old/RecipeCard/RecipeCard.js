import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare, faWindowClose, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe, selected }) => {
  const [hoverName, setHoverName] = useState("");

  const clickHandler = (name) => {
    setHoverName(name);
    console.log("param", name);
    console.log("hoverName", hoverName);
  };

  return (
    <div className="recipe">
      {/* <div class="date">
        <p>{new Date().toLocaleDateString()}</p>
      </div> */}
      <section className="recipe__side recipe__side--left">
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
          <div className="ingredients">
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
                              console.log("Added to shopping list.")}
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
      </section>
    </div>
  );
};

export default RecipeCard;
