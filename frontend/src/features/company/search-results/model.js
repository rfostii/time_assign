import { loadCompanies } from '../api';
import { getFiltersForUrl } from '../../filters/model';

const initialState = {
    companies: [],
};

export default {
  state: initialState,
  reducers: {
    showCompanies(state, companies) {
      state.companies = companies;
    },
  },
  effects: (dispatch) => ({
    async loadCompanies(payload, state) {
        const companies = await loadCompanies(getFiltersForUrl(state));
        this.showCompanies(companies);
    },
  })
};

export const getCompanies = state => state.searchResults.companies;
