import axios from 'axios';
import { URL } from '../config/Api';

export const apiClient = function(token) {
    const params = {
        baseURL: URL,
        headers: { 'Authorization': 'Token ' + token }
    };
    return axios.create(params);
};
