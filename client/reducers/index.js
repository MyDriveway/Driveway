import { combineReducers } from 'redux';
//import all reducers here
import searchReducer from './searchReducer'

//combine reducers
const reducers = combineReducers({
  //
  searches: searchReducer,
});

export default reducers;