import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
    Grid,
    Header,
    Message,
    Segment,
    Input,
    Form,
} from '../../components';
import { isLoading, getError } from './model';
import {
    required,
    email,
} from '../../services/validators';

import './style.css';

const emailFieldValidation = value => (
    required(value) || 
    email(value)
);

class Auth extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,        
        submit: PropTypes.func.isRequired,
        error: PropTypes.string,
    };

    static defaultProps = {
        error: null,
    };

    render () {
        const {
            isLoading,
            error,
            submit,
        } = this.props;

        return (
            <Container className="ta-authorization-form">
                <Grid
                    textAlign="center"
                    style={{ height: '100%' }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="teal" textAlign="center">
                        Авторизація
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
                                iconPosition="left"                 
                                field="email"
                                placeholder="E-mail адреса"
                                validate={emailFieldValidation}
                                validateOnBlur
                            />
                            <Input            
                                fluid
                                icon="lock"
                                iconPosition="left"                    
                                field="password"
                                placeholder="Пароль"
                                type="password"
                                validate={required}
                                validateOnBlur
                            />                            
                            <Button 
                                color="teal"
                                fluid
                                disabled={isLoading}
                                size="large">
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
    }
}
   
export default connect(
    state => ({
        isLoading: isLoading(state),
        error: getError(state),
    }),        
    ({ auth, nav }) => ({
        submit: auth.getToken,
        nav
    })
)(Auth);
