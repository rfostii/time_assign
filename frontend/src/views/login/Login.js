import React, { Component } from 'react';
import LoginForm from '../../features/login-form/LoginForm';
import { Container } from 'semantic-ui-react';


class Login extends Component {
  render() {
    return (
      <Container className="ta-login-page">        
        <LoginForm />    
      </Container>
    );  
  }
}

export default Login;
