import * as types from '../constants/actionTypes';

export const addSearch = (userInput) => ({
  type: types.ADD_SEARCH,
  payload: userInput,
});

export const addLocations = (locations) => ({
  type: types.ADD_LOCATIONS,
  payload: locations,
});

export const selectMarker = (marker) => ({
  type: types.SELECT_MARKER,
  payload: marker
})

export const deselect = () => ({
  type: types.DESELECT,
  payload: null
})
