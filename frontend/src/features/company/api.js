import axios from 'axios';
import querystring from 'query-string';
import { URL } from '../../constants';

export const loadCompanyBySlug = async (slug) => {
    const resp = await axios.get(`${URL}/api/companies/${slug}/`);
    return resp.data;
};

export const loadCompanies = async (params = {}) => {
    const query = querystring.stringify(params);
    const resp = await axios.get(`${URL}/api/companies/?${query}`);
    return resp.data;
};
