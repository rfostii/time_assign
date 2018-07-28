import React, { Component } from 'react';
import SignUpForm from 'features/SignUpForm';
import { Container } from 'semantic-ui-react';


class SignUp extends Component {
  render() {
    return (
      <Container className="signup-page">        
        <SignUpForm />    
      </Container>
    );  
  }
}

export default SignUp;
