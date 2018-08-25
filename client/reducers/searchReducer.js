import * as types from '../constants/actionTypes';

const initialState = {
  userInput: '',
  locations: []
  // locations: [{
  //   address: '',
  //   city: '',
  //   state: '',
  //   zip: '',
  //   timeStart: '',
  //   timeEnd: '',
  //   rateDay: '',
  //   rateHour: '',
  //   image: '',
  //   geometry: {coordinates: []}
  // }]
};

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.ADD_SEARCH:
      return {
        userInput: action.payload
      }

    case types.ADD_LOCATIONS:
      // how to reset the array..
      // const oldLocations = state.locations;
      
      // const newLocations = action.payload.reduce((acc, currValue, currIndex) => {
      //   console.log(`inside reducer ${currValue.harro} index ${currIndex}`)
      //   acc.push(currValue);
      //   return acc;
      // }, []);
      // const newLocations = [...state.locations, ...action.payload];
      console.log('action pay load in reducer', action);
      const newState = Object.assign({}, state, {locations: action.payload})


      return newState;

    default:
      return state;
  }
}

export default searchReducer;