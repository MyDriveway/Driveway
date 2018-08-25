import { combineReducers } from 'redux';
//import all reducers here
import searchesReducer from './searchesReducer';
import mapReducer from './mapReducer';
import loginReducer from './loginReducer';

//combine reducers
const reducers = combineReducers({
  searches: searchesReducer,
  map: mapReducer,
  login: loginReducer
});

export default reducers;