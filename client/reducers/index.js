import { combineReducers } from 'redux';
//import all reducers here
import mapReducer from './mapReducer'

//combine reducers
const reducers = combineReducers({
  map: mapReducer
});

export default reducers;