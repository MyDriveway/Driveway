import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import loginReducer from './loginReducer';
import creationReducer from './creationReducer';

//combine reducers
const reducers = combineReducers({
  map: mapReducer,
  login: loginReducer,
  driveways: creationReducer
});

export default reducers;