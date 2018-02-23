export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.user;
    case 'LOG_OUT':
      return {};
    case 'UPDATE_USER':
      return { ...state, ...action.user };
    case 'UPDATE_FAVORITES':
      return (state.favorites = [...state.favorites, ...action.user.favorites]);
    default:
      return state;
  }
};
