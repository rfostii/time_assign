import { isEmpty } from 'lodash';
import querystring from 'query-string';
import {
    formatFromValuesToUrl,
    formatFromUrlToValues,
} from './formatters';

const defaultFilters = {
    price: { min: 0, max: 100 },
    category: [],
    procedures: [],
};

const getInitialState = () => {    
    const query = formatFromUrlToValues(
        querystring.parse(window.location.search.slice(1))
    );
    
    return Object.keys(defaultFilters).reduce((acc, name) => {
        acc[name] = query[name] || defaultFilters[name];
        return acc;
    }, { ...defaultFilters });
};

export default {
    state: getInitialState(),
    reducers: {
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
        async filter(payload, state) {
            this.update(payload);
            this.syncWithUrl();
            dispatch.searchResults.loadCompanies();
        },
        syncWithUrl(payload, state) {
            const query = querystring.parse(window.location.search.slice(1));
            const filters = Object.keys(state.filters).reduce((acc, name) => {
                acc[name] = state.filters[name];
                return acc;
            }, {});
            const newQuery = querystring.stringify({
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
