import map from 'lodash/map';
import {
    SEARCH_COMPANY_CHANGE,
    SEARCH_COMPANY_START,    
    SEARCH_COMPANY_RESULT,
    SEARCH_COMPANY_SELECT,
    SEARCH_COMPANY_RESET,
} from './actions';

const initialState = {
    isLoading: false,
    results: [], 
    value: '',
    selected: null,
};

const searchCompanyReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_COMPANY_CHANGE:
        return { ...state, value: action.payload };
    case SEARCH_COMPANY_START:
        return { ...state, isLoading: true };    
    case SEARCH_COMPANY_RESULT:
        return { 
            ...state, 
            results: map(action.payload, i =>({
                ...i,
                company_id: i.id,
            })),
            isLoading: false 
        };
    case SEARCH_COMPANY_SELECT:
        return { ...state, selected: action.payload };
    case SEARCH_COMPANY_RESET:
        return initialState;
    default:
        return state;
  }
}

export default searchCompanyReducer;