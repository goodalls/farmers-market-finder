import { marketsReducer } from './markets-reducer';
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
});
