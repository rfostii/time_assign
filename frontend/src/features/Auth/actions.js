import { login } from 'services/Auth';


export const SET_TOKEN = 'SET_TOKEN';

export const setToken = payload => ({ type: SET_TOKEN, payload });

export const getToken = (email, password) => dispatch => 
  login(email, password)
    .then(resp => dispatch(setToken(resp.data.token)));
