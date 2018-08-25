import * as types from '../constants/actionTypes';

export const addSearch = (userInput) => ({
  type: types.ADD_SEARCH,
  payload: userInput,
});

export const addLocations = (locations) => ({
  type: types.ADD_LOCATIONS,
  payload: locations,
});

export const setCurrLocation = (currLocation) => ({
  type: types.SET_CURR_LOCATION,
  payload: currLocation
})

export const selectMarker = (marker) => ({
  type: types.SELECT_MARKER,
  payload: marker
})

export const deselect = () => ({
  type: types.DESELECT,
  payload: null
})

export const setLogin = (bool) => ({
  type: types.SET_LOGIN,
  payload: bool
})
