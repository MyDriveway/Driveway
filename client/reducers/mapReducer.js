import * as types from "../constants/actionTypes";

const initialState = {
  allMarkers: [], // list of all markers we want to put on the map
  selectedMarker: null, // the object details of a marker we select on map
  focus: { lat: 33.985, lng: -118.4695 }, //our current location
  map: null, //reference to the GoogleMap
  searchInput: "", //search input
  locations: []
};

const mapReducer = (state = initialState, action) => {
  let selectedMarker = state.selectedMarker;
  let allMarkers = state.allMarkers;

  switch (action.type) {
    case types.SET_MARKERS:
      allMarkers = action.payload;
      return {
        ...state,
        allMarkers,
        selectedMarker
      };

    case types.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload
      };

    case types.STORE_RESULTS:
      return {
        ...state,
        locations: action.payload.results,
        focus: action.payload.coords,
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
