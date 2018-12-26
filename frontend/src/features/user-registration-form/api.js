import axios from 'axios';
import { URL } from '../../constants';

export const register = (email, password) => axios
    .post(`${URL}/auth/users/create/`, {
        email, 
        password
    })
    .then(resp => resp.data);
