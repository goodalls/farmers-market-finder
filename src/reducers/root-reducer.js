import { combineReducers } from 'redux';
import { marketsReducer } from './markets-reducer';
import { userReducer } from './user-reducer';
import { activeMarketReducer } from './activeMarket-reducer';
import {whyReducer} from './why-reducer';

const rootReducer = combineReducers({
  markets: marketsReducer,
  user : userReducer,
  activeMarket: activeMarketReducer,
  why:  whyReducer
});

export default rootReducer;
