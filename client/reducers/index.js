import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import searchReducer from './searchReducer'
//import all reducers here

//combine reducers
const reducers = combineReducers({
  searches: searchReducer,
//combine reducers
  map: mapReducer
});

export default reducers;