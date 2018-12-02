import React, { Component } from 'react';
import SignUpForm from '../../features/user-registration-form/UserRegistrationForm';
import { Container } from 'semantic-ui-react';


class SignUp extends Component {
  render() {
    return (
      <Container className="ta-signup-page">        
        <SignUpForm />    
      </Container>
    );  
  }
}

export default SignUp;
