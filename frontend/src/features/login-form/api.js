import axios from 'axios';
import { URL } from '../../constants';

export const login = (email, password) => axios
    .post(`${URL}/auth/jwt/create/`, {
        email,
        password
    })
    .then(resp => resp.data);

export const refresh = () => axios.post(`${URL}/auth/jwt/refresh/`);
