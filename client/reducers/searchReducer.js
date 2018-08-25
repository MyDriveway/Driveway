import * as types from '../constants/actionTypes';

const initialState = {
  userInput: '',
  locations: []
};

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.ADD_SEARCH:
      return {
        userInput: action.payload
      }

    case types.ADD_LOCATIONS:
      const newState = Object.assign({}, state, {locations: action.payload})

      return newState;

    default:
      return state;
  }
}

export default searchReducer;