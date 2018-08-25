import * as types from '../constants/actionTypes';

const initialState = {
  allMarkers: [], // list of all markers we want to put on the map
  selectedMarker: null, // the object details of a marker we select on map
  currLocation: {}  //our current location
}

const mapReducer = (state=initialState, action) => {
  let selectedMarker = state.selectedMarker;
  let allMarkers = state.allMarkers;

  switch(action.type) {

    case types.SET_MARKERS:
      allMarkers = action.payload;
      return {
        allMarkers,
        selectedMarker
      }

    case types.SELECT_MARKER:
      // find the selected marker in the arrary of all markers by the marker id
      selectedMarker = state.allMarkers.reduce((final, marker) => {
        if (action.payload === marker.id) final = marker;
        return final;
      }, null);
      return {
        allMarkers,
        selectedMarker
      }
      
    case types.DESELECT:
      selectedMarker = null;
      return {
        allMarkers,
        selectedMarker
      }
    
    case types.SET_CURR_LOCATION:
      const newState = Object.assign({}, state, 
                                      {
                                        currLocation: {
                                          latitude: action.payload.latitude, 
                                          longitude: action.payload.longitude
                                        }
                                      })

      return newState;
      
    default:
      return state;
  }
};

export default mapReducer;