import querystring from 'query-string';

export default (param) => {
    const query = querystring.parse(window.location.search.slice(1)) || {};
    return param ? query[param] : query;
};
