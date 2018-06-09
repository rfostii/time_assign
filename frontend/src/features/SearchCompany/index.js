import React from 'react';
import { connect } from 'react-redux';
import { 
    searchCompanies, searchCompaniesSelect, searchCompaniesReset 
} from './actions';
import Search from '../../components/SearchCompany/Search';


const mapStateToProps = state => {
    return state.companySearch;
};

const mapDispatchToProps = dispatch => ({    
    onSelect: company => searchCompaniesSelect(company),
    onSearch: query => dispatch(searchCompanies(query)),
    reset: () => dispatch(searchCompaniesReset())
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);