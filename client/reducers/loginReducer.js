import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
}

const loginReducer = (state=initialState, action) => {

  switch(action.type) {
    case (types.SET_LOGIN):
      return {
        loggedIn: action.payload
      }
    default:
      return state;
  }
}

export default loginReducer;