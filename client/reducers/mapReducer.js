import * as types from '../constants/actionTypes';

const initialState = {
  allMarkers: [],
  selectedMarker: null,
  currLocation: {}
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
      // console.log("what we are looking for: ", action.payload);
      console.log('inside selectmarket', action.payload);
      selectedMarker = state.allMarkers.reduce((final, marker) => {
        console.log('marker.id: ', marker.id);
        if (action.payload === marker.id) final = marker;
        return final;
      }, null);
      console.log("selectedMarker", selectedMarker);
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