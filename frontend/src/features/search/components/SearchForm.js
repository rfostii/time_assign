import React, { PureComponent } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    withScreen
} from '../../../components';
import { required } from '../../../services/validators';
import CitySearch from './CitySearch';
import CategorySeach from '../../company/categories/CategorySeach';

class SearchForm extends PureComponent {
    static propTypes = {        
        submit: PropTypes.func.isRequired,
        screen: PropTypes.object.isRequired,
        error: PropTypes.string,
    };

    static defaultProps = {
        error: null,
    };

    render () {
        const { screen, submit } = this.props;

        return (            
            <Form className="ta-search-form" onSubmit={submit}>                                          
                <CategorySeach validate={required} showError={false} />
                <CitySearch validate={required} showError={false} />
                <Button 
                    color="blue" 
                    size="large"
                    fluid={screen.isMobile}
                >
                    Шукати
                </Button> 
            </Form>            
        );
    }
}
   
export default compose(
    connect(
        null,
        ({ searchForm, nav }) => ({
            nav,
            submit: searchForm.search,   
        })
    ),
    withScreen({ watch: true })
)(SearchForm);
