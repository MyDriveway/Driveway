import { combineReducers } from 'redux';
//import all reducers here
import searchesReducer from './searchesReducer';
import mapReducer from './mapReducer';

//combine reducers
const reducers = combineReducers({
  searches: searchesReducer,
  map: mapReducer
});

export default reducers;