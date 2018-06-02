import * as actionType from './types';

const tokenInitialState = null;
const tokenReducer = (state = tokenInitialState, action) => {
  switch(action.type) {
    case actionType.SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}

export default tokenReducer;