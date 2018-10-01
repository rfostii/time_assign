import React, { Component } from 'react';
import LoginForm from 'features/Auth/LoginForm';
import { Container } from 'semantic-ui-react';


class Login extends Component {
  render() {
    return (
      <Container className="tm-login-page">        
        <LoginForm />    
      </Container>
    );  
  }
}

export default Login;
