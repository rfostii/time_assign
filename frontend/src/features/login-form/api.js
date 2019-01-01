import axios from 'axios';
import { URL } from '../../constants';

export const login =  async (email, password) => {
    const resp = await axios.post(`${URL}/auth/jwt/create/`, {
        email,
        password
    })
    return resp.data;
};

export const refresh = () => axios.post(`${URL}/auth/jwt/refresh/`);
