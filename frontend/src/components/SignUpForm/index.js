import React from 'react';
import './SignUpForm.css';
import { Field, reduxForm } from 'redux-form';
import { Container, Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';


const required = value => {
  return value ? undefined : 'Поле є обов\'язковим';
};

const email = value => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 
    undefined :
    'Неправильний email';
};

const  minLength = length => value => {
  return value.length < length ?
    `Пароль має містити хоча б ${length} символів` :
    undefined;
};

const minLength8 = minLength(8);


const validate = values => {
  const errors = {};

  if (values.password1 !== values.password2) {
    errors.password2 = 'Паролі не збігаються';
  }
  return errors;
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

const SignUpForm = props => {
  const { handleSubmit, submitting } = props;

  return (<Container className="signup-form">
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>                
          Створіть свій профіль
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
              validate={[required, email]}
            />
            <Field
              component={Control}
              fluid
              icon='lock'
              iconPosition='left'
              name="password1"
              placeholder='Пароль'
              type='password'
              validate={[required, minLength8]}
            />
            <Field
              component={Control}
              fluid
              icon='lock'
              name="password2"
              iconPosition='left'
              placeholder='Повторіть пароль'
              type='password'
              validate={[required, minLength8]}
            />
            <Button 
              color='teal' 
              fluid 
              size='large'
              disabled={submitting}>
              Створити
            </Button>
          </Segment>
        </Form>            
      </Grid.Column>
    </Grid>
  </Container>);
};

export default reduxForm({  
  form: 'signup',
  validate,
})(SignUpForm);
