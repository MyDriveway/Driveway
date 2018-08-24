import { combineReducers } from 'redux';
//import all reducers here
import searchesReducer from './searchesReducer';

//combine reducers
const reducers = combineReducers({
  searches: searchesReducer,
});

export default reducers;