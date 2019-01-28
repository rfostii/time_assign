import { loadCompanies } from '../../../api/company';
import { getFiltersForUrl } from '../../filters/model';
import getQueryParam from '../../../utils/getQueryParam';

const initialState = {
    isLoading: false,
    companies: [],
};

export default {
    state: initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        showCompanies(state, companies) {
            state.isLoading = false;
            state.companies = companies;
        },
        reset(state) {
            Object.keys(state).forEach((name) => {
                state[name] = initialState[name];
            });
        }
    },
    effects: () => ({
        async loadCompanies(payload, state) {
            this.startLoading();         
            const company = getQueryParam('company');
            const companies = await loadCompanies({
                company,
                ...getFiltersForUrl(state),
            });
            this.showCompanies(companies);
        },
    })
};

export const isLoading = state => state.searchResults.isLoading;
export const getCompanies = state => state.searchResults.companies;
