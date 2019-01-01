import React, { PureComponent } from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Search as BaseSearch, Item } from '../../components';
import {
    getSeachResults,
    getLoadingStatus,
    getValue
} from './model';
import { composeSearchLink } from './helpers';

import './style.css';

export class Search extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        reset: PropTypes.func.isRequired,                
        search: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        value: PropTypes.string,
        attributes: PropTypes.object,
    };

    static defaultProps = {
        value: '',
        attributes: {},
    };

    componentDidMount() {
        const { value } = this.props;

        this.setState(() => ({ value }));
    }

    handleResultSelect = (e, { result }) => {
        const { onSelect } = this.props;
        
        onSelect(result);
    };

    handleSearchChange = (e, { value }) => {
        const {
            reset,
            search,
            onChange
        } = this.props;
        
        onChange(value);

        if (!value.length) {
            reset();
        }
        if (value.length > 2) {
            search(value);
        }
    };

    resultRenderer = result => {
        return (
            <Item key={result.company_id}>
                <Item.Image size='tiny' src={result.logo} />
                <Item.Content verticalAlign='middle'>
                    <Link
                        to={composeSearchLink(result)}
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
            value,
            attributes,  
        } = this.props;

        return <BaseSearch action='Пошук'            
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
            {...attributes}
        />;
    }
}

export default connect(
    state => ({
        results: getSeachResults(state),
        isLoading: getLoadingStatus(state),
        value: getValue(state),
    }),
    ({ companySearch }) => ({
        reset: companySearch.reset,
        search: debounce(companySearch.search, 300),
        onChange: companySearch.onChange,
        onSelect: companySearch.onSelect,
    })
)(Search);
