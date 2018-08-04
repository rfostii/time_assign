import { combineReducers } from 'redux'
import routerReducer from './common/routingReducer';
import { reducer as formReducer } from 'redux-form'
import authReducer from './Auth/reducer';
import searchCompanyReducer from './SearchCompany/reducer';
import companyReducer from './Company/reducer';


export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  companySearch: searchCompanyReducer,
  company: companyReducer,
});