import * as types from '../constants/actionTypes';

const initialState = {
    createDrivewayModal: false,
    submitError: false,  //responsible for rendering login page or map page
}

const creationReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.OPEN_CREATE_MODAL:
      return {
        ...state,
        createDrivewayModal: true
      }
    case types.CLOSE_CREATE_MODAL:
      return {
        ...state,
        createDrivewayModal: false,
        submitError: false
      }
    case types.CREATE_DRIVEWAY:
      fetch('/createDriveway', {
        method: 'POST',
        body: action.payload
      }).then((res) => {
      })
      .catch((err) => {
        console.log(err);
      })
      return {
        ...state,
        createDrivewayModal: false,
      }
    case types.CREATION_ERROR:
      return {
        ...state,
        submitError: true,
      }
      
    default:
      return state;
  }
}

export default creationReducer;