import React, { PureComponent } from 'react';
import { Container } from '../../components';
import LoginForm from '../../features/login-form/LoginForm';


export default class extends PureComponent {
  render() {
    return (
      <Container className="ta-login-page">
        <LoginForm />
      </Container>
    );  
  }
}
