import * as actions from './actions';

describe('ACTIONS', () => {
  let mockMarket;
  let mockMarkets;
  let mockUser;

  beforeAll(() => {
    mockMarkets = [];
    mockMarket = {
      name: 'the market',
      location: 'address',
      products: 'stuff'
    };
    mockUser = {
      name: 'jeff',
      password: 'boom',
      favorites: []
    };
  });

  it('should create an POPULATE_MARKETS action', () => {
    const expected = { type: 'POPULATE_MARKETS', markets: mockMarkets };
    expect(actions.populateMarkets(mockMarkets)).toEqual(expected);
  });

  it('should ADD_DETAILS to markets array objects', () => {
    const mockID = 1;
    const expected = {
      type: 'ADD_DETAILS',
      marketDetails: mockMarket,
      id: mockID
    };
    expect(actions.addDetails(mockID, mockMarket)).toEqual(expected);
  });

  it('should LOG_IN a user', () => {
    const expected = {
      type: 'LOG_IN',
      user: mockUser
    };
    expect(actions.loginUser(mockUser)).toEqual(expected);
  });

  it('should LOG_OUT a user', () => {
    const expected = { type: 'LOG_OUT' };
    expect(actions.logOutUser()).toEqual(expected);
  });

  it('should create an UPDATE_USER action', () => {
    const expected = {
      type: 'UPDATE_USER',
      user: mockUser
    };
    expect(actions.updateUser(mockUser)).toEqual(expected);
  });

  it('should create an UPDATE_FAVORITES action', () => {
    const expected = {
      type: 'UPDATE_FAVORITES',
      market: mockMarket
    };
    expect(actions.updateFavorites(mockMarket)).toEqual(expected);
  });

  it('should create a REMOVE_FAVORITE action', () => {
    const expected = {
      type: 'REMOVE_FAVORITE',
      market: mockMarket
    };
    expect(actions.removeFavorite(mockMarket)).toEqual(expected);
  });

  it('should create a POP_WHY action to populate the why component', () => {
    const expected = {
      type: 'POP_WHY',
      why: []
    };
    expect(actions.populateWhy([])).toEqual(expected);
  });
});
