import * as actionType from './types';
import { login } from 'services/Auth';

export const setToken = payload => ({ type: actionType.SET_TOKEN, payload });

export const getToken = (email, password) => dispatch => 
  login(email, password)
    .then(resp => dispatch(setToken(resp.data.token)));
