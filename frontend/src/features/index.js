import { combineReducers } from 'redux'
import routerReducer from './common/routingReducer';
import { reducer as formReducer } from 'redux-form'
import tokenReducer from './Auth/reducer';
import searchCompanyReducer from './SearchCompany/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  token: tokenReducer,
  companySearch: searchCompanyReducer,
});