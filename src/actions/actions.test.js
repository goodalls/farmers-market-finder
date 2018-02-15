import * as actions from './actions';

describe('ACTIONS', () => {
  it('should create an POPULATE_MARKETS action', () => {
    const mockMarkets = [];
    const expected = { type: 'POPULATE_MARKETS', markets: mockMarkets };
    expect(actions.populateMarkets(mockMarkets)).toEqual(expected);
  });
});