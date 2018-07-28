import * as actionType from './types';

const tokenInitialState = {
  token: null,
  authorized: false
};
const tokenReducer = (state = tokenInitialState, action) => {
  switch(action.type) {
    case actionType.SET_TOKEN:
      return {...state, authorized: true, token: action.payload };
    default:
      return state;
  }
}

export default tokenReducer;