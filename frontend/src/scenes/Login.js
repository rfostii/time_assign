import React, { Component } from 'react';
import Auth from 'features/Auth';
import { Container } from 'semantic-ui-react';


class Login extends Component {
  render() {
    return (
      <Container className="tm-login-page">        
        <Auth />    
      </Container>
    );  
  }
}

export default Login;
