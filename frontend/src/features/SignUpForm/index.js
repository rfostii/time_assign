import React from 'react';
import { connect } from 'react-redux';
import { signup } from './actions';
import SignUpForm from 'components/SignUpForm';


const mapDispatchToProps = dispatch => ({  
  onSubmit: ({ email, password1:password }) => dispatch(signup(email, password))  
});
   
export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);