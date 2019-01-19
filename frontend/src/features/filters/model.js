import { isEmpty } from 'lodash';
import { queryToObject, objectToQuery } from '../../services/query';
import {
    formatFromValuesToUrl,
    formatFromUrlToValues,
} from './formatters';

const defaultFilters = {    
    price: { min: 0, max: 100 },
    category: [],
    procedure: [],
    city: null
};

const getStateFromUrl = () => {  
    const query = formatFromUrlToValues(
        queryToObject(window.location.search.slice(1))
    );
    
    return Object.keys(defaultFilters).reduce((acc, name) => {
        acc[name] = query[name] || defaultFilters[name];
        return acc;
    }, { ...defaultFilters });
};

export default {
    state: getStateFromUrl(),
    reducers: {        
        populate(state, filters) {
            Object.keys(filters).forEach((name) => {
                state[name] = filters[name];
            });
        },
        update(state, { name, value }) {
            state[name] = value;
        },        
        reset(state) {
            Object.keys(state).forEach((name) => {
                state[name] = defaultFilters[name];
            });
        },
    },
    effects: (dispatch) => ({
        init() {
            this.populate(getStateFromUrl());
            dispatch.searchResults.loadCompanies();
        },
        async filter(payload) {
            this.update(payload);
            this.syncWithUrl();
            dispatch.searchResults.loadCompanies();
        },
        syncWithUrl(payload, state) {
            const query = queryToObject(window.location.search.slice(1));
            const filters = Object.keys(state.filters).reduce((acc, name) => {
                acc[name] = state.filters[name];
                return acc;
            }, {});
            const newQuery = objectToQuery({
                ...query,
                ...formatFromValuesToUrl(filters),
            });
            dispatch.nav.navigate(window.location.pathname, {
                search: '?' + newQuery
            });
        }
    })
};

export const getFilters = state => state.filters;
export const getFiltersForUrl = state => formatFromValuesToUrl(state.filters);
export const isFiltered = state => !isEmpty(state.filters);
