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
export const updateSearchInput = searchInput => ({
  type: types.UPDATE_SEARCH_INPUT,
  payload: searchInput
});

// add a driveway to search locations
export const storeSearchResults = fetchData => ({
  type: types.STORE_RESULTS,
  payload: fetchData
});

// sets the current view for the map
export const setFocus = coords => ({
  type: types.SET_FOCUS,
  payload: coords
});

// select a specific marker on the map (currently broken in the Google maps container)
export const selectMarker = id => ({
  type: types.SELECT_MARKER,
  payload: id
});

// deselect any marker on the map
export const deselectMarker = () => ({
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
