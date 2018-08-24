import * as types from '../constants/actionTypes';

const initialState = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {}
}

const mapReducer = (state=initialState, action) => {

  switch(action.type) {
    // case types.TOGGLE_SHOWING_INFO_WINDOW:

    //   // return updated state
    //   return {
    //     ...state
    //   };

    // case types.ADD_ACTIVE_MARKER:

    //   // return updated state
    //   return {
    //     ...state
    //   };

    //   case types.ADD_SELECTED_PLACE:

    //   // return updated state
    //   return {
    //     ...state
    //   };

    default:
      return state;
  }
};

export default mapReducer;