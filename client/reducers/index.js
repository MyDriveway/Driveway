import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import loginReducer from './loginReducer';
import searchReducer from './searchReducer';

//combine reducers
const reducers = combineReducers({
  searches: searchReducer,
  map: mapReducer,
  login: loginReducer
});

export default reducers;