export const marketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MARKETS':
      return [...action.markets];
    default:
      return state;
  }
};
