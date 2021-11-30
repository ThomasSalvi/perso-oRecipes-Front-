import { ON_CHANGE, SAVE_USER, HANDLE_LOGOUT } from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  loggedMessage: 'bienvenue',
  pseudo: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE:
      if (action.target === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        pseudo: action.pseudo,
        token: action.token,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        isLogged: action.isLogged,
        pseudo: '',
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
