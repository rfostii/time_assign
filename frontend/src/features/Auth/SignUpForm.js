import { connect } from 'react-redux';
import SignUpForm from 'components/SignUpForm';


const mapDispatchToProps = dispatch => ({  
  onSubmit: ({ email, password1: password }) => {
    dispatch.auth.signup(email, password)      
  }
});
   
export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);