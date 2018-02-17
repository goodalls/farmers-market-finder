export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOG_IN':
      return [...state, action.user];
    default:
      return state;
  }
};
