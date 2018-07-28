import { createUser } from 'services/Auth';
import { getToken } from 'features/Auth/actions';


export const signup = (email, password) => dispatch => 
  createUser(email, password)
    .then(resp => dispatch(getToken(email, password)));
