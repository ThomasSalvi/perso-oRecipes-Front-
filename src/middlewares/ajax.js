import { WS_CONNECT, saveRecipes, setLoading } from 'src/actions/recipes';
import { HANDLE_LOGIN, saveUser, FETCH_FAV, saveFavorites } from 'src/actions/user';
import axios from 'axios';

const ajax = (store) => (next) => (action) => {
  if (action.type === WS_CONNECT) {
    store.dispatch(setLoading());
    axios.get('http://localhost:3001/recipes')
      .then((response) => {
        store.dispatch(saveRecipes(response.data));
      })
      .catch((error) => {
        alert(error);
      });
    store.dispatch(setLoading());
    next(action);
  }
  else if (action.type === HANDLE_LOGIN) {
    const state = store.getState();
    store.dispatch(setLoading());
    axios.post('http://localhost:3001/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        store.dispatch(saveUser(response.data));
      })
      .catch((error) => {
        alert(error);
      });
    store.dispatch(setLoading());
    next(action);
  }
  else if (action.type === FETCH_FAV) {
    const state = store.getState();
    axios.get('http://localhost:3001/favorites', {
      headers: {
        Authorization: `bearer ${state.user.token}`,
      },
    })
      .then((response) => {
        console.log(response);
        store.dispatch(saveFavorites(response.data));
      })
      .catch((error) => {
        alert(error);
      });
    next(action);
  }
  else {
    next(action);
  }
};

export default ajax;
