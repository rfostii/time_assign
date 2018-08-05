import { search } from 'services/Company';


export const SEARCH_COMPANY_CHANGE = 'SEARCH_COMPANY_CHANGE';
export const SEARCH_COMPANY_START = 'SEARCH_COMPANY_START';
export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const SEARCH_COMPANY_RESULT = 'SEARCH_COMPANY_RESULT';
export const SEARCH_COMPANY_SELECT = 'SEARCH_COMPANY_SELECT';
export const SEARCH_COMPANY_RESET = 'SEARCH_COMPANY_RESET';

export const searchCompanyChange = value => ({ 
    type: SEARCH_COMPANY_CHANGE,
    payload: value
});

export const searchCompanyStart = () => ({ 
    type: SEARCH_COMPANY_START
});

export const searchCompany = query => dispatch => {
    dispatch(searchCompanyStart())
    return search(query)
        .then(resp => {            
            dispatch(searchCompanySuccess(resp.data));
        });
}

export const searchCompanySuccess = companies => ({ 
    type: SEARCH_COMPANY_RESULT, 
    payload: companies
});

export const searchCompanySelect = company => ({ 
    type: SEARCH_COMPANY_SELECT,
    payload: company
});

export const searchCompanyReset = () => ({ 
    type: SEARCH_COMPANY_RESET
});
