import { LOCATION_CHANGE } from 'react-router-redux';
import { FILTER } from '../Filter/types';
import queryString from 'query-string';
import assignIn from 'lodash/assignIn';
import omitBy from 'lodash/omitBy';


const initialState = { locationBeforeTransitions: null };

function getNewSearch(search, newSearchParams) {        
    const currentParams = queryString.parse(search);
    const newParams = assignIn(currentParams, newSearchParams);
    const newQuery = omitBy(newParams, i => !i);
    const newSearch = queryString.stringify(newQuery);
    
    return {
        search: newSearch && '?' + newSearch,
        query: newQuery
    };
};

export default (state = initialState, action) => {  
  switch(action.type) {
      case LOCATION_CHANGE: {
        return { ...state, locationBeforeTransitions: action.payload };
      }
      case FILTER: {
        const { name, value } = action.payload;
        const location = state.locationBeforeTransitions;
        const { search, query } = getNewSearch(location.search, { [name]: value });
        const newLocation = { ...location, search, query, action: 'PUSH' };

        return { ...state, locationBeforeTransitions: newLocation };
      }
      default: return state;
  }
}