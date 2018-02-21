import { combineReducers } from 'redux';
import { marketsReducer } from './markets';
import { userReducer } from './user';
import { activeMarketReducer } from './activeMarket';
import {whyReducer} from './why';

const rootReducer = combineReducers({
  markets: marketsReducer,
  user : userReducer,
  activeMarket: activeMarketReducer,
  why:  whyReducer
});

export default rootReducer;
