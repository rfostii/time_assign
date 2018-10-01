import map from 'lodash/map';
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
    searchCompanyChange(state, { payload }) {
      return { ...state, value: payload };
    },
    searchCompanyStart(state) {
      return { ...state, isLoading: true };  
    },
    searchCompanySuccess(state, { payload }) {
      return { 
        ...state, 
        results: map(payload, i =>({
          ...i,
          company_id: i.id,
        })),
        isLoading: false 
      };
    },
    searchCompanySelect(state, { payload }) {
      return { ...state, selected: payload };
    },
    searchCompanyReset() {
      return initialState;
    },
  },
  effects: (dispatch) => ({
    async searchCompany(query) {
      dispatch.search.searchCompanyStart();

      const resp = await search(query);
      dispatch.search.searchCompanySuccess(resp.data);
    },
  })
};