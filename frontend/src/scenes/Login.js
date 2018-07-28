import React, { Component } from 'react';
import Auth from 'features/Auth';
import { Container } from 'semantic-ui-react';


class Login extends Component {
  render() {
    return (
      <Container className="login-page">        
        <Auth />    
      </Container>
    );  
  }
}

export default Login;
