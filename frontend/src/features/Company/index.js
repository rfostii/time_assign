import { combineReducers } from 'redux'
import search from './CompanySearch/reducer';
import company from './CompanyInfo/reducer';
import searchResults from './CompaniesList/reducer';


export default combineReducers({ 
    search,
    company,
    searchResults,
});