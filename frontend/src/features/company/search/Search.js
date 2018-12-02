import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Search as BaseSearch, Item } from 'semantic-ui-react';

import './style.css';

export class Search extends PureComponent {
    static propTypes = {
        searchCompanyReset: PropTypes.func.isRequired,
        searchCompanySelect: PropTypes.func.isRequired,
        searchCompanyChange: PropTypes.func.isRequired,
        searchCompany: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
    };

    handleResultSelect = (e, { result }) => {
        const { searchCompanySelect } = this.props;
        
        searchCompanySelect(result);
    };

    handleSearchChange = (e, { value }) => {
        const { 
            searchCompanyChange,
            searchCompanyReset,
            searchCompany
        } = this.props;
        
        searchCompanyChange(value);
        
        if (!value.length) {
            searchCompanyReset();
        }
        if (value.length > 2) {
            searchCompany(value);
        }
    };

    resultRenderer = result => {
        return (
            <Item key={result.id}>
                <Item.Image size='tiny' src={result.logo} />
                <Item.Content verticalAlign='middle'>
                    <Link
                        to={'/search/' + result.id}
                        className="ta-company__link"
                    >
                        {result.name}
                    </Link>
                </Item.Content>
            </Item>
        );
    };

    render() {
        const { 
            isLoading, 
            results, 
            value 
        } = this.props;

        return <BaseSearch action='Пошук'
            fluid
            size='huge'
            className='ta-search-field'
            minCharacters={3}
            noResultsMessage='Нічого не знайдено'
            placeholder='Пошук...'
            loading={isLoading}
            resultRenderer={this.resultRenderer}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
        />;
    }
}

export default connect(
    ({ companySearch }) => ({
        ...companySearch
    }),
    ({ companySearch }) => ({
        ...companySearch
    })
)(Search);
