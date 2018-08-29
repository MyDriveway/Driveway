import * as types from "../constants/actionTypes";

//DRIVEWAY ACTIONS

export const openCreateModal = () => ({
  type: types.OPEN_CREATE_MODAL
});
export const closeCreateModal = () => ({
  type: types.CLOSE_CREATE_MODAL
});
export const createDriveway = data => ({
  type: types.CREATE_DRIVEWAY,
  payload: data
});
export const creationError = () => ({
  type: types.CREATION_ERROR
});

// add a location search value to the store
export const addSearch = userInput => ({
  type: types.ADD_SEARCH,
  payload: userInput
});

// add a driveway to search locations
export const addLocations = locations => ({
  type: types.ADD_LOCATIONS,
  payload: locations
});

// sets the current location fpr the map
export const setCurrLocation = currLocation => ({
  type: types.SET_CURR_LOCATION,
  payload: currLocation
});

// select a specific marker on the map (currently broken in the Google maps container)
export const selectMarker = id => ({
  type: types.SELECT_MARKER,
  payload: id
});

// deselect any marker on the map
export const deselect = () => ({
  type: types.DESELECT,
  payload: null
});

// login being true bypases login page
export const setLogin = bool => ({
  type: types.SET_LOGIN,
  payload: bool
});

// sets all the markers to show on the map
export const setMarkers = markers => ({
  type: types.SET_MARKERS,
  payload: markers
});
