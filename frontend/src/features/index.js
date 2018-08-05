import { combineReducers } from 'redux'
import routing from './common/routingReducer';
import { reducer as form } from 'redux-form'
import auth from './Auth/reducer';
import company from './Company';


export default combineReducers({
  routing,
  form,
  auth,
  company
});