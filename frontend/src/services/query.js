import querystring from 'query-string';

export const objectToQuery = params => querystring.stringify(params, { arrayFormat: 'bracket' });
export const queryToObject = query => querystring.parse(query, { arrayFormat: 'bracket' });

export default {
    objectToQuery,
    queryToObject,
};
