import { isArray, omitBy } from 'lodash';
import { FILTERS, FILTER_TYPES } from './constants';

export const formatFromValuesToUrl = (filters) => {
    const { price, ...rest } = filters;
    const range = { priceMin: price.min || undefined, priceMax: price.max || undefined };
    return {
        ...rest,
        ...range
    };
}

export const formatFromUrlToValues = (params) => {
    const { priceMax, priceMin, ...rest } = params;
    const price = priceMax ? { min: +(priceMin || 0), max: +priceMax, } : null;
    const notFilters = omitBy(rest, (config, name) => FILTERS[name]);
    const filters = Object.keys(rest)
        .reduce((acc, name) => {
            const value = params[name];

            if (!FILTERS[name] || !value) return acc;

            const { type } = FILTERS[name];

            switch(type) {
                case FILTER_TYPES.MULTI:
                    acc[name] = isArray(value) ? value : [value];
                    break;            
                default:
                    acc[name] = value;
            }        
            return acc;
        }, {});
    return {        
        price,
        ...notFilters,
        ...filters,
    };
}
