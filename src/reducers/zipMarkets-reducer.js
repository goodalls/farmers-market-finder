export const zipMarkets = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_ZIP_MARKETS':
      return [...action.markets];
    default:
      return state;
  }
};
