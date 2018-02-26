import { whyReducer } from './why-reducer';
import * as actions from '../actions/actions';

describe('WHY_REDUCER', () => {
  it('should return the current state by default', () => {
    const mockState = {
      quote1: 'big quote',
      quote2: 'bigger quote'
    };
    const expected = {
      quote1: 'big quote',
      quote2: 'bigger quote'
    };
    expect(whyReducer(mockState, {})).toEqual(expected);
  });

  it('should populate the Why quotes into store', () => {
    const mockState = {};
    const mockWhy = {
      quote1: 'big quote',
      qoute2: 'bigger quote'
    };
    const expected = {
      quote1: 'big quote',
      qoute2: 'bigger quote'
    };
    expect(whyReducer(mockState, actions.populateWhy(mockWhy))).toEqual(
      expected
    );
  });
});
