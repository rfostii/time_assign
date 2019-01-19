import { queryToObject } from '../services/query';

export default (param) => {
    const query = queryToObject(window.location.search.slice(1)) || {};
    return param ? query[param] : query;
};
