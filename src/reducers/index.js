import { combineReducers } from 'redux';
import { marketsReducer } from './markets';
import { userReducer } from './user';

const rootReducer = combineReducers({
  markets: marketsReducer,
  user : userReducer
});

export default rootReducer;
