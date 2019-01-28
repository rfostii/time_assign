import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Visibility, Menu } from '../../components';
import { APP_NAME } from '../../constants';
import { getUser, isAuthenticated } from '../login-form/model';

class Navigation extends PureComponent {
    static propTypes = {
        authenticated: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired,
        user: PropTypes.shape({
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }),        
    };

    static defaultProps = {
        user: null,
    };

    renderAuthLinks() {
        return (
            <Menu.Menu position='right'>
                <Menu.Item position='right'>
                    <NavLink to="/signup" activeClassName="active">
                        Реєстрація
                    </NavLink>
                </Menu.Item>
                <Menu.Item position='right'>
                    <NavLink to="/login" activeClassName="active">
                        Ввійти
                    </NavLink>
                </Menu.Item>                
            </Menu.Menu>
        );
    }

    renderUser() {
        const { user, logout } = this.props;
        const userName = user.first_name && user.last_name 
            ? `${user.first_name} ${user.last_name}`
            : user.email;
        return (
            <Menu.Menu position='right'>
                <Menu.Item position='right'>
                    Вітаємо, {userName}
                </Menu.Item>
                <Menu.Item position='right'>
                    <a href="" onClick={logout}>Вийти</a>                    
                </Menu.Item>
            </Menu.Menu>   
        );
    }

    render() {
        const { authenticated } = this.props;

        return (
            <Visibility once={false}>   
                <Menu secondary>
                    <Menu.Menu position='left'>
                        <Menu.Item header>
                            <NavLink to="/" activeClassName="active">{APP_NAME}</NavLink>
                        </Menu.Item>                
                    </Menu.Menu>                
                    { authenticated 
                        ? this.renderUser() 
                        : this.renderAuthLinks() 
                    }
                </Menu>  
            </Visibility>
        );
    }    
}

export default connect(
    state => ({
        authenticated: isAuthenticated(state),
        user: getUser(state),
    }),
    dispatch => ({
        logout: dispatch.auth.logout,
    })
)(Navigation);
