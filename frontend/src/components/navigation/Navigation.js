import React from 'react';
import { NavLink } from 'react-router-dom';
import { Visibility, Menu } from 'semantic-ui-react';

export default props => ( 
    <Visibility once={false}>   
        <Menu borderless>
            <Menu.Menu position='left'>
                <Menu.Item header>
                    <NavLink to="/" activeClassName="active">Time Assign</NavLink>                
                </Menu.Item>                
            </Menu.Menu>                
            <Menu.Menu position='right'>
                <Menu.Item position='right'>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                </Menu.Item>
                <Menu.Item position='right'>
                    <NavLink to="/signup" activeClassName="active">
                        Sign Up
                    </NavLink>
                </Menu.Item>
            </Menu.Menu>                        
        </Menu>  
    </Visibility>
)
