import { connect } from 'react-redux';
import { 
    searchCompanyChange, searchCompany, 
    searchCompanySelect, searchCompanyReset
} from './actions';
import Search from 'components/Company/CompanySearch';


const mapStateToProps = state => state.company.search;

const mapDispatchToProps = dispatch => ({  
    onChange: value => dispatch(searchCompanyChange(value)),
    onSelect: company => dispatch(searchCompanySelect(company)),
    onSearch: query => dispatch(searchCompany(query)),
    reset: () => dispatch(searchCompanyReset())
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);