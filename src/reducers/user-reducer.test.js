import {userReducer} from './user-reducer';
import * as actions from '../actions/actions';

describe('USER', () => {
  it('should return the current state by default', () => {
    const mockState = [{}, {}];
    const expected = [{}, {}];
    expect(userReducer(mockState, {})).toEqual(expected);
  });
  it('should add user to the store via the LOG_IN action ', () => {
    const mockUser = {};
    const mockState = [{}, {}];
    const expected = [{}, {}, {}];
    expect(userReducer(mockState, actions.loginUser(mockUser))).toEqual(expected);
  });
});
