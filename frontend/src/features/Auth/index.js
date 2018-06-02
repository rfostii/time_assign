import React from 'react';
import { connect } from 'react-redux';
import { getToken } from './actions';
import Auth from '../../components/Auth/Auth';


const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => dispatch(getToken(email, password))
});
   
export default connect(
  null,
  mapDispatchToProps
)(Auth);