export const populateMarkets = markets => ({
  type: 'POPULATE_MARKETS',
  markets
});

export const loginUser = user => ({
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

export const updateFavorites = market => ({
  type: 'UPDATE_FAVORITES',
  market
});

export const removeFavorite = market => ({
  type: 'REMOVE_FAVORITE',
  market
});

export const populateWhy = why => ({
  type: 'POP_WHY',
  why
});

export const populateZipMarkets = markets => ({
  type: 'POPULATE_ZIP_MARKETS',
  markets
});
