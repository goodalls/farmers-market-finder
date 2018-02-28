import { combineReducers } from 'redux';
import { favoriteReducer } from './favorite-reducer';
import { marketsReducer } from './markets-reducer';
import { zipMarkets } from './zipMarkets-reducer';
import { userReducer } from './user-reducer';
import { whyReducer } from './why-reducer';

const rootReducer = combineReducers({
  markets: marketsReducer,
  zipMarkets,
  user: userReducer,
  why: whyReducer,
  favoriteArray: favoriteReducer
});

export default rootReducer;
