import React from 'react';
import { 
    isMobile, 
    isTablet, 
    isDesktop 
} from '../../services/device';

export default (params ={}) => Component => {
    class Screen extends React.Component {
        state = {
            isMobile: isMobile(),
            isTablet: isTablet(),
            isDesktop: isDesktop(),
        };

        componentDidMount() {
            if (params.watch) {
                window.addEventListener('resize', this.screenSizeChanged);
            }
        }
    
        componentWillUnmount() {
            if (params.watch) {
                window.removeEventListener('resize', this.screenSizeChanged);
            }
        }

        shouldComponentUpdate(nextProps, nextState) {
            return Object
                .keys(nextState)
                .some(key => nextState[key] !== this.state[key]);
        }

        screenSizeChanged = () => {
            this.setState(() => ({
                isMobile: isMobile(),
                isTablet: isTablet(),
                isDesktop: isDesktop(),
            }));
        };

        render() {            
            return (
                <Component
                    screen={this.state}
                    {...this.props}
                />
            );
        }
    }

    return Screen;
};
