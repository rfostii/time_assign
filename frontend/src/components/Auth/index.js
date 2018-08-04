import React from 'react';
import './Auth.css';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { 
  Container, Button, Form, Grid, Header, Message, Segment 
} from 'semantic-ui-react';


const required = value => {
  return value ? undefined : 'Поле є обов\'язковим';
};

const email = value => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 
    undefined :
    'Неправильний email';
};

const addErrorMessageToField = Component => props => (
  <React.Fragment>
    <Component {...props} />
    {props.meta.touched &&
      ((props.meta.error && <Message error content={props.meta.error} />) ||
        (props.meta.warning && <Message warn content={props.meta.warning} />))}
  </React.Fragment>
);

const Control = addErrorMessageToField(Form.Input);

const Auth = props => {
  const { handleSubmit, submitting } = props;
  
  if (props.authorized) {
    browserHistory.push('/');
  }

  return (
    <Container className="tm-authorization-form">
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>                
            Авторизація
          </Header>
          <Form size='large' error onSubmit={handleSubmit}>
            <Segment>              
                <Field  
                  component={Control}            
                  fluid
                  icon='user'
                  name="email"
                  iconPosition='left'
                  placeholder='E-mail адреса'
                  validate={[required, email]} />
                <Field     
                  component={Control}            
                  fluid
                  icon='lock'
                  name="password"
                  iconPosition='left'
                  placeholder='Пароль'
                  type='password'
                  validate={[required]} />
              <Button 
                color='teal' 
                fluid 
                size='large'
                disabled={submitting}>
                Увійти
              </Button>
            </Segment>
          </Form>
          <Message>
            Немаєте власного профільлю? <Link to="/signup">Створити</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default reduxForm({  
  form: 'auth'
})(Auth);
