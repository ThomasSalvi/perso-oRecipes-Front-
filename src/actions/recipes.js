export const WS_CONNECT = 'WS_CONNECT';
export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const SAVE_RECIPES = 'SAVE_RECIPES';
export const saveRecipes = (data) => ({
  type: SAVE_RECIPES,
  data: data,
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = () => ({
  type: SET_LOADING,
});
