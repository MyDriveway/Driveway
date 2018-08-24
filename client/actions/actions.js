// import actionType constants
import * as types from '../constants/actionTypes'

export const toggleShowingInfoWindow = (toggle) => ({
  type: types.TOGGLE_SHOWING_INFO_WINDOW,
  payload: toggle,
});

export const addActiveMarker = (marker) => ({
  type: types.ADD_ACTIVE_MARKER,
  payload: marker,
});

export const addSelectedPlace = (place) => ({
  type: types.ADD_SELECTED_PLACE,
  location: place
});