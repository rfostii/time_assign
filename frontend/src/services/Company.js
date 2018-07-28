import axios from 'axios';
import get from 'lodash/get';
import { URL, SEARCH_COMPANY } from 'config/Api';


export function search(search) {
  return axios
    .get(URL + SEARCH_COMPANY, {
        params: { search }
    })
    .catch((error) => {      
      throw error;
    });
};