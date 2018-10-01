import { connect } from 'react-redux';
import Auth from 'components/Auth';


const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ({
  onSubmit: (credentials) => dispatch.auth.getToken(credentials)
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);