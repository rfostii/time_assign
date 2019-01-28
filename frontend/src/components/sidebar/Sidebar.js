import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Sidebar } from 'semantic-ui-react';
import {
    Button,
    Icon,
} from '../../components';

import './style.css';

export default class extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: ''
    };

    state = {
        visible: false,
    };    

    toggle = () => {
        const { visible } = this.state;

        this.setState({ visible: !visible });
    };

    handleSidebarHide = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state
        const { 
            title,
            content,
            children,
            className,
            ...rest
        } = this.props;

        const classNames = classnames(
            'ta-sidebar',
            className
        );

        return (
            <div className={classNames}>
                {!visible && <Button 
                    className="ta-sidebar__toggler" 
                    color="blue"
                    fluid 
                    onClick={this.toggle}>
                    {title}
                </Button>}
                <Sidebar.Pushable className="ta-sidebar__pushable">
                    <Sidebar
                        className="ta-sidebar__sidebar"
                        animation="overlay"                                                          
                        visible={visible}
                        width="wide"
                        inverted
                        vertical
                        onHide={this.handleSidebarHide}
                        {...rest}
                    >
                    <div className="ta-sidebar__controls">
                        <Icon 
                            className="ta-sidebar__close" 
                            name="close"
                            onClick={this.handleSidebarHide}
                        />
                    </div>                        
                        {content}
                    </Sidebar>
                    <Sidebar.Pusher 
                        dimmed={visible} 
                        className="ta-sidebar__pusher"
                    >
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
