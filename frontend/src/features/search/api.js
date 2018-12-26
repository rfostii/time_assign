import axios from 'axios';
import { URL } from '../../constants';

export const search = search => axios
    .get(`${URL}/api/companies/`, {
        params: { search }
    })
    .then(resp => resp.data);
