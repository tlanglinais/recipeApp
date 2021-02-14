import React, { useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ recipeList, clickHandler }: any) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleShowSearch = () => {
    if (showSearch) {
      setSearchTerm("");
    }
    setShowSearch(!showSearch);
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <div className="row">
          <h3>Recipes</h3>
          <FontAwesomeIcon icon={faPlus} />
          <div onClick={toggleShowSearch} className="icon-button">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {showSearch && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
          </div>
        )}
      </div>
      <RecipeList
        recipeList={recipeList}
        searchTerm={searchTerm}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default Sidebar;
