import { activeMarketReducer } from './activeMarket';
import * as actions from '../actions/actions';

describe('ACTIVE_MARKET_REDUCER', () => {

  it('should return the current state by default', () => {
    const mockState = [{}, {}];
    const expected = [{}, {}];
    expect(activeMarketReducer(mockState, {})).toEqual(expected);
  });

  it('should indicate the active market selected by the user', () => {
    const mockID = 2
    const expected = {id: 2};
    expect(activeMarketReducer({}, actions.activeMarket(mockID))).toEqual(expected);
  });
});

