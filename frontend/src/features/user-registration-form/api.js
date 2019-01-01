import axios from 'axios';
import { URL } from '../../constants';

export const register = async (email, password) => {
    const resp = await axios.post(`${URL}/auth/users/create/`, {
        email, 
        password
    })
    return resp.data;
};
