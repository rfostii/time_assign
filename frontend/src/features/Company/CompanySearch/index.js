import { connect } from 'react-redux';
import Search from 'components/Company/CompanySearch';


const mapStateToProps = ({ search }) => search;

const mapDispatchToProps = dispatch => ({
    onChange: value => dispatch.search.searchCompanyChange(value),
    onSelect: company => dispatch.search.searchCompanySelect(company),
    onSearch: query => dispatch.search.searchCompany(query),
    reset: () => dispatch.search.searchCompanyReset()
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);