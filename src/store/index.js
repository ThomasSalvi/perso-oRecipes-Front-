import { createStore, applyMiddleware, compose } from 'redux';
import ajax from 'src/middlewares/ajax';
import debug from 'src/middlewares/debug';

import reducer from 'src/reducers';

const middlewares = applyMiddleware(ajax, debug);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
