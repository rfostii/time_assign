import { reducer as form } from 'redux-form'
import auth from './login-form/model';
import companyList from './company/search-results/model';
import companyInfo from './company/company-details/model';
import companySearch from './company/search/model';


export const models = {
    auth,
    companyList,
    companyInfo,
    companySearch,
};

export const reducers = {
    form,
};