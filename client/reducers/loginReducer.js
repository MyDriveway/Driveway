import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,  //responsible for rendering login page or map page
  signedUp: false,
}

const loginReducer = (state=initialState, action) => {

  switch(action.type) {
    case (types.SET_LOGIN):
      return {
        loggedIn: action.payload
      }
    case (types.SET_SIGNED_UP):
      return {
        signedUp: action.payload
      }
    default:
      return state;
  }
}

export default loginReducer;