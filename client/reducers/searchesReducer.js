import * as types from '../constants/actionTypes';

const initialState = {
  address: [],
};


const searchesReducer = (state=initialState, action) => {
  for (let i = 0; i < 10; i++) {
    const obj = {
      address: '11646 Kiowa Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90049',
      rateDay: 30,
      rateHour: 2,
      index: i,
    }
    state.address.push(obj);
  };
  switch(action.type) {
    default:
      return state;
  }
  //perhaps return state out here
  
};

export default searchesReducer;