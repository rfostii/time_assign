import React from 'react';
import { connect } from 'react-redux';
import { getToken } from './actions';
import Auth from 'components/Auth';


const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => dispatch(getToken(email, password))
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);