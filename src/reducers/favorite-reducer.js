export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return [...state, action.market];
    case 'REMOVE_FAVORITE':
      const newState = state.filter(
        favorite => favorite.id !== action.market.id
      );
      return newState;
    default:
      return state;
  }
};
