import { search } from 'services/Company';

const initialState = {
  isLoading: false,
  results: [], 
  value: '',
  selected: null,
};

export default {
  state: initialState,
  reducers: {
    searchCompanyChange(state, value) {
      state.value = value;
    },
    searchCompanyStart(state) {
      state.isLoading = true;
    },
    searchCompanySuccess(state, companies) {
        state.results = companies;
        state.isLoading = false;      
    },
    searchCompanySelect(state, selected) {
      state.selected = selected;
    },
    searchCompanyReset() {
      return initialState;
    },
  },
  effects: (dispatch) => ({
    async searchCompany(query) {
      dispatch.companySearch.searchCompanyStart();

      const resp = await search(query);
      dispatch.companySearch.searchCompanySuccess(resp.data);
    },
  })
};