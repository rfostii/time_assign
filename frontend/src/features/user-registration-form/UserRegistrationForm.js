import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Container,
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Input,
} from '../../components';
import { isLoading, getError } from './model';
import {
    required,   
    email,
    minLength,
    samePassword,
} from '../../services/validators';

import './style.css';

const minLength8 = minLength(8);

const emailValidation = value => (
    required(value) ||
    email(value)
);

const password1Validation = value => (
    required(value) ||
    minLength8(value)
);

const password2Validation = (value, values) => (
    password1Validation(value) ||
    samePassword(values.password1, values.password2)
);

class SignUpForm extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        submit: PropTypes.func.isRequired,
        error: PropTypes.string,
    };

    static defaultProps = {
        error: null,
    };

    render() {        
        const { 
            isLoading,
            error,
            submit,
        } = this.props;

        return (
            <Container className="ta-signup-form">
                <Grid
                    textAlign="center"
                    style={{ height: '100%' }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="blue" textAlign="center">                
                        Створіть свій профіль
                    </Header>
                    <Form           
                        size="large" 
                        error={error}
                        onSubmit={submit}
                    >
                        <Segment>                        
                            <Input                       
                                fluid
                                icon="user"
                                field="email"
                                iconPosition="left"
                                placeholder="E-mail адреса"
                                validate={emailValidation}
                                validateOnBlur
                            />
                            <Input                
                                fluid
                                icon="lock"
                                iconPosition="left"
                                field="password1"
                                placeholder="Пароль"
                                type="password"
                                validate={password1Validation}
                                validateOnBlur
                            />
                            <Input
                                fluid
                                icon="lock"
                                field="password2"
                                iconPosition="left"
                                placeholder="Повторіть пароль"
                                type="password"
                                validate={password2Validation}
                                validateOnBlur
                            />
                        <Button 
                            color="blue" 
                            fluid 
                            disabled={isLoading}
                            size="large">
                            Створити
                        </Button>
                        </Segment>
                    </Form>            
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
};

export default connect(
    state => ({
        isLoading: isLoading(state),
        error: getError(state),
    }),
    ({ registration }) => ({
        submit: registration.register,
    })
)(SignUpForm);
