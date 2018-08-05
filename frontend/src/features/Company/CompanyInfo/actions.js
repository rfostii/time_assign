import { getCompanyBySlug } from 'services/Company';


export const SHOW_COMPANY_INFO = 'SHOW_COMPANY_INFO';

export const loadCompanyBySlug = slug => dispatch => 
    getCompanyBySlug(slug).then(resp => dispatch(showCompany(resp)));

export const showCompany = company => ({
    type: SHOW_COMPANY_INFO,
    payload: company,
});