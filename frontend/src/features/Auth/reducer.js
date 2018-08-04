import { SET_TOKEN } from './actions';


const tokenInitialState = {
  token: null,
  authorized: false
};
const tokenReducer = (state = tokenInitialState, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return {...state, authorized: true, token: action.payload };
    default:
      return state;
  }
}

export default tokenReducer;