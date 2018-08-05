import { SHOW_COMPANIES_LIST } from './actions';


const companyReducer = (state = {}, action) => {
  switch(action.type) {
    case SHOW_COMPANIES_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default companyReducer;