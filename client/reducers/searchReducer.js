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
      // how to reset the array..
      state.locations = [];
      // const oldLocations = state.locations;
      
      // const newLocations = action.payload.reduce((acc, currValue, currIndex) => {
      //   console.log(`inside reducer ${currValue.harro} index ${currIndex}`)
      //   acc.push(currValue);
      //   return acc;
      // }, []);
      const newLocations = [...state.locations, ...action.payload];

      return { 
        locations: newLocations
      }

    default:
      return state;
  }
}

export default searchReducer;