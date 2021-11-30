import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes, isLogged }) => (
  <nav className="menu">
    <NavLink
      className="menu-link"
      activeClassName="menu-link--active"
      exact
      to="/"
    >
      Accueil
    </NavLink>
    {isLogged && <NavLink to='/favorites' className='menu-link'>
      Favoris
    </NavLink>}
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        className="menu-link"
        activeClassName="menu-link--active"
        exact
        to={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Menu;
