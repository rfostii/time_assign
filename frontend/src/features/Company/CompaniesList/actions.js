import { getCompanies } from 'services/Company';


export const SHOW_COMPANIES_LIST = 'SHOW_COMPANIES_LIST';

export const loadCompanies = companyId => dispatch => 
    getCompanies(companyId).then(resp => dispatch(showCompanies(resp)));

export const showCompanies = companies => ({
    type: SHOW_COMPANIES_LIST,
    payload: companies,
});