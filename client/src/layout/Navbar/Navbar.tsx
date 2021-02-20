import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <div className="container--full-width">
    <div className="navbar">
      <div className="navbar__item">
        <a href="/">Recipes</a>
      </div>
      <div className="navbar__item">
        <a href="/">Ingredients</a>
      </div>
      <div className="navbar__item">
        <a href="/">Your List</a>
      </div>
    </div>
  </div>
);

export default Navbar;
