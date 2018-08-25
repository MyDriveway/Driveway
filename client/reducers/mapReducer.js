import * as types from '../constants/actionTypes';

const initialState = {
  allMarkers: [],
  selectedMarker: null
}

const mapReducer = (state=initialState, action) => {
  let selectedMarker;
  let allMarkers;

  switch(action.type) {

    case types.SET_MARKERS:
      allMarkers = action.payload;
      selectedMarker = initialState.selectedMarker;
      return {
        allMarkers,
        selectedMarker
      }

    case types.SELECT_MARKER:
      selectedMarker = action.payload;
      allMarkers = state.allMarkers;
      return {
        allMarkers,
        selectedMarker
      }
      
    case types.DESELECT:
      selectedMarker = null;
      allMarkers = state.allMarkers;
      return {
        allMarkers,
        selectedMarker
      }
      
    default:
      return state;
  }
};

export default mapReducer;