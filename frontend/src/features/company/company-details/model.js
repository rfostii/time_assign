import { loadCompanyBySlug } from '../api';

export default {
  state: {
      company: {},
  },
  reducers: {
    showCompany(state, company) {
      state.company = company;
    },
  },
  effects: (dispatch) => ({
    async loadCompany(slug, state) {
        if (!slug) {
            dispatch.nav.navigate('/404');
            return;
        }
        const company = await loadCompanyBySlug(slug);
        this.showCompany(company);
    },
  })
};

export const getCompany = state => state.companyDetails.company;
