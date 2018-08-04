import { search } from 'services/Company';


export const SEARCH_COMPANY_START = 'SEARCH_COMPANY_START';
export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const SEARCH_COMPANY_RESULT = 'SEARCH_COMPANY_RESULT';
export const SEARCH_COMPANY_END = 'SEARCH_COMPANY_END';
export const SEARCH_COMPANY_SELECT = 'SEARCH_COMPANY_SELECT';
export const SEARCH_COMPANY_RESET = 'SEARCH_COMPANY_RESET';

export const searchCompaniesStart = () => ({ 
    type: SEARCH_COMPANY_START
});

export const searchCompanies = query => dispatch => {
    dispatch(searchCompaniesStart())
    return search(query)
        .then(resp => {
            dispatch(searchCompaniesEnd());
            dispatch(searchCompaniesSuccess(resp.data));
        });
}

export const searchCompaniesSuccess = companies => ({ 
    type: SEARCH_COMPANY_RESULT, 
    payload: companies
});

export const searchCompaniesEnd = () => ({ 
    type: SEARCH_COMPANY_END
});

export const searchCompaniesSelect = company => ({ 
    type: SEARCH_COMPANY_SELECT,
    payload: company
});

export const searchCompaniesReset = () => ({ 
    type: SEARCH_COMPANY_RESET
});
