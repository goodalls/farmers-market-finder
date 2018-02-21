export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...action.user, ...state };
    case 'LOG_OUT':
      return {};
    case 'UPDATE_USER':
      return {  ...state, ...action.user };
    default:
      return state;
  }
};
