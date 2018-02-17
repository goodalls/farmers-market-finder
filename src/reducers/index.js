import { combineReducers } from 'redux';
import { marketsReducer } from './markets';
import { userReducer } from './user';
import { activeMarketReducer } from './activeMarket';

const rootReducer = combineReducers({
  markets: marketsReducer,
  user : userReducer,
  activeMarket: activeMarketReducer 
});

export default rootReducer;
