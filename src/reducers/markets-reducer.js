export const marketsReducer = (state = [], action) => {
  switch (action.type) {
  case 'POPULATE_MARKETS':
    return [...action.markets];
  case 'ADD_DETAILS':
    const details = state.map(market => {
      if (market.id === action.id) {
        return Object.assign({}, market, action.marketDetails);
      } else {
        return market;
      }
    });
    return details;
  default:
    return state;
  }
};
