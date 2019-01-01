import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Item } from '../../../components';
import CompanyItem from './components/CompanyItem';
import { getCompanies } from './model';

export class SearchResults extends PureComponent {
    static propTypes = {
        companies: PropTypes.array.isRequired,
        loadCompanies: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { loadCompanies } = this.props;
        loadCompanies();
    }

    render() {
        const { companies } = this.props;

        return (
            <Item.Group>
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
   
export default connect(
    state => ({
        companies: getCompanies(state),
    }),
    dispatch => ({            
        loadCompanies: dispatch.searchResults.loadCompanies,
    }),
)(SearchResults);
