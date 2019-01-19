import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Container,
    Button,
    Form
} from '../../../components';
import { required } from '../../../services/validators';
import CitySearch from './CitySearch';
import CategorySeach from '../../company/categories/CategorySeach';

class SearchForm extends PureComponent {
    static propTypes = {        
        submit: PropTypes.func.isRequired,
        error: PropTypes.string,
    };

    static defaultProps = {
        error: null,
    };

    render () {
        const { submit } = this.props;
        
        return (
            <Container className="ta-search-form">
                <Form onSubmit={submit}>                                          
                    <CategorySeach validate={required} showError={false} />
                    <CitySearch validate={required} showError={false} />
                    <Button color="blue" size="large">
                        Шукати
                    </Button> 
                </Form>
            </Container>
        );
    }
}
   
export default connect(
    null,
    ({ searchForm, nav }) => ({
        nav,
        submit: searchForm.search,   
    })
)(SearchForm);
