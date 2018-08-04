import axios from 'axios';
import { URL } from 'config/Api';

let apiClient = axios;

export const configureApiClient = function(token) {
    const params = {
        baseURL: URL,
        headers: { 'Authorization': 'Token ' + token }
    };
    apiClient = axios.create(params);
    return apiClient;
};

export const get = function() {
    return apiClient.get.apply(apiClient, arguments); 
}

export const post = function() {
    return apiClient.post.apply(apiClient, arguments); 
}
