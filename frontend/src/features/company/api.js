import axios from 'axios';
import { URL } from '../../constants';

export function getCompanyBySlug(slug) {
  return axios
    .get(`${URL}/api/companies/${slug}/`)
    .then(resp => resp.data);
}

export function getCompanies(company_id) {
  return axios
    .get(`${URL}/api/companies/`, {
      params: {
        company_id
      }
    })
    .then(resp => resp.data);
}