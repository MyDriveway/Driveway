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
  selectedMarker: null,
  currLocation: {}
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