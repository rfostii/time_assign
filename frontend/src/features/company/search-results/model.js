import { getCompanies } from 'services/Company';


export default {
  state: {},
  reducers: {
    showCompanies(state, companies) {
      return companies;
    },
  },
  effects: (dispatch) => ({    
    async loadCompanies(companyId) {
        const companies = await getCompanies(companyId);
        dispatch.companies.showCompanies(companies);
    },
  })
};