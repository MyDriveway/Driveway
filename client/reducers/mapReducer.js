import * as types from '../constants/actionTypes';

const initialState = {
  allMarkers: [
    {
      position: { lat: 39.648209, lng: -75.711185 },
      display: false
    },
    {
      position: { lat: 39.658209, lng: -75.731185 },
      display: false
    },
  ],
  selectedMarker: null
}

const mapReducer = (state=initialState, action) => {
  let selectedMarker;
  let allMarkers;

  switch(action.type) {

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