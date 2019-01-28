import { search } from '../../../api/company';

const initialState = {
  isLoading: false,
  results: [],
  selected: null,
};

export default {
  state: initialState,
  reducers: {    
    onStart(state) {
      state.isLoading = true;
    },
    onSuccess(state, companies) {
        state.results = companies.map(company => ({
            ...company,
            companyId: company.id
        }));
        state.isLoading = false;
    },
    onSelect(state, selected) {
      state.selected = selected;
    },
    reset(state) {
        Object.keys(state).forEach((name) => {
            state[name] = initialState[name];
        });
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
