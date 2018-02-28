export const marketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MARKETS':
      return [...action.markets];
    case 'UPDATE_FAVORITES':
      const newState = state;
      const index = newState.indexOf(action.market);
      const replace = newState.splice(index, 1, action.market);
      return newState;
    default:
      return state;
  }
};
