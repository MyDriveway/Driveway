// import actionType constants
import * as types from '../constants/actionTypes'

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