export const activeMarketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_MARKET':
      return {id: action.id};
    default:
      return state;
  }
};
