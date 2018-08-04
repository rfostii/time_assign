import axios from 'axios';
import { URL, GET_COMPANY } from 'config/Api';


export function search(search) {
  return axios
    .get(URL + GET_COMPANY, {
        params: { search }
    })
    .catch((error) => {      
      throw error;
    });
};

export function getCompanyBySlug(slug) {
  return axios
    .get(URL + GET_COMPANY + slug + '/')
    .then(resp => resp.data)
    .catch((error) => {      
      throw error;
  });
}