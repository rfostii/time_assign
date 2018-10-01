import routing from './common/routingReducer';
import { reducer as form } from 'redux-form'
import auth from './Auth/model';
import company from './Company';


export const models = {
  auth,
  ...company,
};

export const reducers = {
  routing,
  form,  
};