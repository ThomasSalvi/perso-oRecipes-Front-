import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import { Route, Switch, useLocation } from 'react-router-dom';
import Error from 'src/components/Error';
import Fav from 'src/containers/Fav';
import Loading from './Loading';

import './style.scss';

const App = ({ loading, wsConnect, isLogged }) => {
  useEffect(wsConnect, []);
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipe/:slug">
          <Recipe />
        </Route>
        {isLogged && (
        <Route path="/favorites">
          <Fav>Recettes</Fav>
        </Route>
        )}
        {!isLogged && (
        <Route path="/">
          <Home />
        </Route>
        )}
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  wsConnect: PropTypes.func.isRequired,
};

export default App;
