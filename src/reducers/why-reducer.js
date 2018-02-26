export const whyReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POP_WHY':
      return { ...state, ...action.why };
    default:
      return state;
  }
};
