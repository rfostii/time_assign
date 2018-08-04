import { SHOW_COMPANY_INFO } from './actions';


const companyReducer = (state = {}, action) => {
  switch(action.type) {
    case SHOW_COMPANY_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default companyReducer;