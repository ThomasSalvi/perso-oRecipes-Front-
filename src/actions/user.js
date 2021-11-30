export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = () => ({
  type: CHANGE_FIELD,
});

export const ON_CHANGE = 'ON_CHANGE';
export const onChange = (value, target) => ({
  type: ON_CHANGE,
  value: value,
  target: target,
});

export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (data) => ({
  type: SAVE_USER,
  isLogged: data.logged,
  pseudo: data.pseudo,
  token: data.token,
});

export const HANDLE_LOGOUT = 'HANDLE_LOGOU';
export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
  isLogged: false,
});

export const FETCH_FAV = 'FETCH_FAV';
export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const SAVE_FAV = 'SAVE_FAV';
export const saveFavorites = (data) => ({
  type: SAVE_FAV,
  recipes: data.favorites,
});
