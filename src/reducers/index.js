import { combineReducers } from 'redux';
import { marketsReducer } from './markets';

const rootReducer = combineReducers({
  markets: marketsReducer
});

export default rootReducer;
