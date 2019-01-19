import React, { PureComponent } from 'react';
import { Container } from '../../components';
import SignUpForm from '../../features/user-registration-form/UserRegistrationForm';

export default class extends PureComponent {
  render() {
    return (
      <Container className="ta-signup-page">        
        <SignUpForm />    
      </Container>
    );  
  }
}
