import React from 'react';
import { Link } from 'react-router';
import { Container, Visibility, Menu } from 'semantic-ui-react';

export default props => ( 
    <Visibility once={false}>   
        <Menu borderless>
            <Menu.Menu position='left'>
                <Menu.Item header>
                    <Link to="/" activeClassName="active">Time Assign</Link>                
                </Menu.Item>                
            </Menu.Menu>                
            <Menu.Menu position='right'>
                <Menu.Item position='right'>
                    <Link to="/login" activeClassName="active">Login</Link>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Link to="/signup" activeClassName="active">
                        Sign Up
                    </Link>
                </Menu.Item>
            </Menu.Menu>                        
        </Menu>  
    </Visibility>
)
