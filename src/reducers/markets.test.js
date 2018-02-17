import { marketsReducer } from './markets';
import * as actions from '../actions/actions';

describe('MARKETS_REDUCER', () => {
  it('should return the current state by default', () => {
    const mockState = [{}, {}];
    const expected = [{}, {}];
    expect(marketsReducer(mockState, {})).toEqual(expected);
  });

  it('should add markets to store via POPULATE_MARKETS', () => {
    const mockMarkets = [{}, {}];
    const expected = [{}, {}];
    expect(marketsReducer([], actions.populateMarkets(mockMarkets))).toEqual(
      expected
    );
  });

  it('should add market details to store via ADD_DETAILS', () => {
    const mockState = [{ id: 1, market: 'purple people eaters' }];
    const mockID = 1;
    const mockMarketDetails = { id: 1, marketDetails: 'minnesota vikings' };
    const expected = [
      {
        id: 1,
        market: 'purple people eaters',
        marketDetails: 'minnesota vikings'
      }
    ];
    expect(
      marketsReducer(mockState, actions.addDetails(mockID, mockMarketDetails))
    ).toEqual(expected);
  });
});
