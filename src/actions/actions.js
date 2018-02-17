export const populateMarkets = markets => ({ 
  type: 'POPULATE_MARKETS', 
  markets 
});

export const addDetails = (id, marketDetails) => ({ 
  type: 'ADD_DETAILS',
  id,
  marketDetails
});

export const loginUser = (user) => ({
  type: 'LOG_IN',
  user
});
