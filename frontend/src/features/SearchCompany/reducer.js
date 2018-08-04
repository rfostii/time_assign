import {
    SEARCH_COMPANY_START,
    SEARCH_COMPANY_END,
    SEARCH_COMPANY_RESULT,
    SEARCH_COMPANY_SELECT,
    SEARCH_COMPANY_RESET,
} from './actions';

const initialState = {
    isLoading: false,
    results: [], 
    value: ''
};

const searchCompanyReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_COMPANY_START:
        return { ...state, isLoading: true };
    case SEARCH_COMPANY_END:
        return { ...state, isLoading: false };
    case SEARCH_COMPANY_RESULT:
        return { 
            ...state, 
            results: action.payload.map(i => ({ key: i.id, ...i })),
            isLoading: false 
        };
    case SEARCH_COMPANY_SELECT:
        return { ...state, value: action.payload };
    case SEARCH_COMPANY_RESET:
        return initialState;
    default:
        return state;
  }
}

export default searchCompanyReducer;