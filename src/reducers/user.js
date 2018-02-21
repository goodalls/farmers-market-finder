export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...action.user, ...state};
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};
