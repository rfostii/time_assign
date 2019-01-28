import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Item, Loader } from '../../../components';
import { getCompanies, isLoading } from './model';
import { CompanyItem } from './components/company-item';

import './style.css';

export class SearchResults extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        companies: PropTypes.array.isRequired,
        reset: PropTypes.func.isRequired,
    };

    componentWillUnmount() {
        const { reset } = this.props;
        reset();
    }

    render() {
        const { companies, isLoading } = this.props;

        return (
            <Item.Group>
                {isLoading && <Loader />}
                {companies.map(company =>
                    <CompanyItem
                        key={company.id} 
                        company={company} 
                    />
                )}
            </Item.Group>
        );
    }
}
   
export default compose(
    connect(
        state => ({
            isLoading: isLoading(state),
            companies: getCompanies(state),
        }),
        dispatch => ({
            reset: dispatch.searchResults.reset,
        }),
    ),
    withRouter
)(SearchResults);
