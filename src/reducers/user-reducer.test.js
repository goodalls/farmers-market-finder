import { userReducer } from './user-reducer';
import * as actions from '../actions/actions';

describe('USER', () => {
  let mockUser;
  let mockState;

  beforeAll(() => {
    mockUser = { name: 'jeff' };
    mockState = { name: 'jorge' };
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };
    global.localStorage = localStorageMock;
  });

  it('should return the current state by default', () => {
    const expected = { favorites: [] };
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should add user to the store via the LOG_IN action ', () => {
    const expected = { name: 'jeff' };
    expect(userReducer(mockState, actions.loginUser(mockUser))).toEqual(
      expected
    );
  });

  it('should be able to LOG_OUT a user', () => {
    const expected = {};
    expect(userReducer(mockState, actions.logOutUser())).toEqual(expected);
  });

  it('should be able to UPDATE_USER', () => {
    const mockUser = { favorites: [], password: 'da man' };
    const expected = {
      name: 'jorge',
      favorites: [],
      password: 'da man'
    };
    expect(userReducer(mockState, actions.updateUser(mockUser))).toEqual(
      expected
    );
  });

  it('should be able to update user favorites array', () => {
    const mockState = {
      name: 'jorge',
      favorites: [],
      password: 'da man'
    };
    const mockMarket = {
      name: 'the market',
      place: 'in town'
    };
    const expected = {
      name: 'jorge',
      favorites: [
        {
          name: 'the market',
          place: 'in town'
        }
      ],
      password: 'da man'
    };
    expect(userReducer(mockState, actions.updateFavorites(mockMarket))).toEqual(
      expected
    );
  });

  it('should be able to remove a favorite using REMOVE_FAVORITE', () => {
    const mockMarket = {
      id: 31,
      name: 'the market',
      place: 'in town'
    };
    const mockState = {
      name: 'jorge',
      favorites: [
        {
          id: 31,
          name: 'the market',
          place: 'in town'
        }
      ],
      password: 'da man'
    };
    const expected = {
      name: 'jorge',
      favorites: [],
      password: 'da man'
    };
    expect(userReducer(mockState, actions.removeFavorite(mockMarket))).toEqual(
      expected
    );
  });
});
