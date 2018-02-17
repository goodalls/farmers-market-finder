import * as actions from './actions';

describe('ACTIONS', () => {
  it('should create an POPULATE_MARKETS action', () => {
    const mockMarkets = [];
    const expected = { type: 'POPULATE_MARKETS', markets: mockMarkets };
    expect(actions.populateMarkets(mockMarkets)).toEqual(expected);
  });

  it('should ADD_DETAILS to markets array objects', () => {
    const mockID = 1;
    const mockMarketDetails = {};
    const expected = { 
      type: 'ADD_DETAILS', 
      marketDetails: mockMarketDetails,
      id: mockID
    };
    expect(actions.addDetails(mockID, mockMarketDetails)).toEqual(expected);
  });
});