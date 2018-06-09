import * as actionType from './types';
import { search } from '../../services/Company';


export const searchCompaniesStart = () => ({ 
    type: actionType.SEARCH_COMPANY_START
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
    type: actionType.SEARCH_COMPANY_RESULT, 
    payload: companies
});

export const searchCompaniesEnd = () => ({ 
    type: actionType.SEARCH_COMPANY_END
});

export const searchCompaniesSelect = company => ({ 
    type: actionType.SEARCH_COMPANY_SELECT,
    payload: company
});

export const searchCompaniesReset = () => ({ 
    type: actionType.SEARCH_COMPANY_RESET
});
