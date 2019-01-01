import axios from 'axios';
import { URL } from '../../constants';

export const search = async (search) => {
    const resp = await axios.get(`${URL}/api/companies/`, {
        params: { search }
    })
    return resp.data;
};
