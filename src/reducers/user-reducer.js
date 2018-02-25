export const userReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, ...action.user };
    case 'LOG_OUT':
      return {};
    case 'UPDATE_USER':
      return { ...state, ...action.user };
    case 'UPDATE_FAVORITES':
      const update = (state.favorites = [...state.favorites, action.market]);
      localStorage.setItem('user', JSON.stringify(state));
      return state;
    case 'REMOVE_FAVORITE':
      const remove = (state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.market.id
      ));
      localStorage.setItem('user', JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
