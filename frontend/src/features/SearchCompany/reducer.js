import * as actionType from './types';

const initialState = {
    isLoading: false,
    results: [], 
    value: ''
};

const searchCompanyReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SEARCH_COMPANY_START:
        return { ...state, isLoading: true };
    case actionType.SEARCH_COMPANY_END:
        return { ...state, isLoading: false };
    case actionType.SEARCH_COMPANY_RESULT:
        return { 
            ...state, 
            results: action.payload.map(i => ({ key: i.id, ...i })),
            isLoading: false 
        };
    case actionType.SEARCH_COMPANY_SELECT:
        return { ...state, value: action.payload };
    case actionType.SEARCH_COMPANY_RESET:
        return initialState;
    default:
        return state;
  }
}

export default searchCompanyReducer;