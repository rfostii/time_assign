import { getCompanyBySlug } from 'services/Company';


export default {
  state: {},
  reducers: {
    showCompany(state, company) {
      return company;
    },
  },
  effects: (dispatch) => ({    
    async loadCompanyBySlug(slug) {
        const company = await getCompanyBySlug(slug);
        dispatch.company.showCompany(company);
    },
  })
};