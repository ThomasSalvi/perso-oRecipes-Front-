import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Fav = ({ fetchFav, recipes }) => {
  useEffect(fetchFav, []);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Régalez-vous avec vos favoris !"
        recipes={recipes}
      />
    </Page>
  )};

Fav.propTypes = {
  recipes: PropTypes.array.isRequired,
  fetchFav: PropTypes.func.isRequired,
};

export default Fav;
