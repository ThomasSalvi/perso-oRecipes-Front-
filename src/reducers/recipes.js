import { SAVE_RECIPES, SET_LOADING, WS_CONNECT } from 'src/actions/recipes';
import { SAVE_FAV } from 'src/actions/user';

export const initialState = {
  list: [],
  loading: false,
  favList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SAVE_FAV:
      return {
        ...state,
        favList: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
