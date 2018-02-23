import { userReducer } from './user-reducer';
import * as actions from '../actions/actions';

describe('USER', () => {
  it('should return the current state by default', () => {
    const expected = {};
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should add user to the store via the LOG_IN action ', () => {
    const mockUser = { name: 'jeff' };
    const mockState = { name: 'jorge' };
    const expected = { name: 'jeff' };
    expect(userReducer(mockState, actions.loginUser(mockUser))).toEqual(
      expected
    );
  });
});
