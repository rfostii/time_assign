import axios from 'axios';
import { URL } from '../constants';

export const loadCompanyBySlug = async (slug) => {
    const resp = await axios.get(`${URL}/api/companies/${slug}`);
    return resp.data;
};

export const loadCompanies = async (params = {}) => {
    const resp = await axios.get(`${URL}/api/companies`, { params });
    return resp.data;
};

export const loadCities = async (search) => {
    const resp = await axios.get(`${URL}/api/companies/locations/get`, {
        params : { search }
    });
    return resp.data;
};

export const search = async (search) => {    
    const resp = await axios.get(`${URL}/api/companies`, {
        params: { search }
    })
    return resp.data;
};

export const loadCategories = async () => {
    const resp = await axios.get(`${URL}/api/companies/categories/`);
    return resp.data;
};
