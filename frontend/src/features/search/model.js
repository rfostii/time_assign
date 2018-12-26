import { search } from './api';

const initialState = {
  isLoading: false,
  results: [], 
  value: '',
  selected: null,
};

export default {
  state: initialState,
  reducers: {
    onChange(state, value) {
      state.value = value;
    },
    onStart(state) {
      state.isLoading = true;
    },
    onSuccess(state, companies) {
        state.results = companies.map(company => ({
            ...company,
            company_id: company.id
        }));
        state.isLoading = false;      
    },
    onSelect(state, selected) {
      state.selected = selected;
    },
    reset() {
      return initialState;
    },
  },
  effects: () => ({
    async search(query) {
        this.onStart();

      const companies = await search(query);
      this.onSuccess(companies);
    },
  })
};

export const getSeachResults = state => state.companySearch.results;
export const getLoadingStatus = state => state.companySearch.isLoading;
export const getValue = state => state.companySearch.value;
