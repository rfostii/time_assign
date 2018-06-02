import { createUser } from '../../services/Auth';
import { getToken } from '../Auth/actions';


export const signup = (email, password) => dispatch => 
  createUser(email, password)
    .then(resp => dispatch(getToken(email, password)));
