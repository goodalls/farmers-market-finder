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

export const logOutUser = () => ({
  type: 'LOG_OUT'
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});

export const updateFavorites = (user) => ({
  type: 'UPDATE_FAVORITES',
  user
});

export const activeMarket = id => ({
  type: 'ACTIVE_MARKET',
  id
});


