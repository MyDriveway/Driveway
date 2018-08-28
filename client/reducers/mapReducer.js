import * as types from "../constants/actionTypes";

const initialState = {
  allMarkers: [], // list of all markers we want to put on the map
  selectedMarker: null, // the object details of a marker we select on map
  focus: {}, //our current location
  map: null,//reference to the GoogleMap
};

const mapReducer = (state = initialState, action) => {
  let selectedMarker = state.selectedMarker;
  let allMarkers = state.allMarkers;

  switch (action.type) {
    case types.SET_MARKERS:
      allMarkers = action.payload;
      return {
        allMarkers,
        selectedMarker
      };

    case types.SELECT_MARKER:
      // find the selected marker in the arrary of all markers by the marker id
      selectedMarker = state.allMarkers.reduce((final, marker) => {
        if (action.payload === marker.id) final = marker;
        return final;
      }, null);
      return {
        ...state,
        focus: selectedMarker.position,
        allMarkers,
        selectedMarker
      };

    case types.DESELECT:
      selectedMarker = null;
      return {
        ...state,
        allMarkers,
        selectedMarker
      };

    case types.SET_FOCUS:
    console.log('SETTING FOCUS!!, ', action.payload);
      return {
        ...state,
        focus: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };

    default:
      return state;
  }
};

export default mapReducer;
