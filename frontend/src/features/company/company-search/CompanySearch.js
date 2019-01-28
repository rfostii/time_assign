import React, { PureComponent } from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
    Search, 
    Item,
    Form,
    Rating
} from '../../../components';
import {
    getSeachResults,
    getLoadingStatus,
} from './model';
import { composeSearchLinkFromCompany } from '../helpers';

import './style.css';

export class CompanySearch extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        companies: PropTypes.array.isRequired,
        reset: PropTypes.func.isRequired,                
        search: PropTypes.func.isRequired,    
        onSelect: PropTypes.func.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
    };

    static defaultProps = {
        value: '',
        onChange: null,
        onSubmit: null,
    };  

    resultRenderer = (company) => {
        return (
            <Item key={company.companyId}>
                <Item.Image src={company.logo} />                
                <Item.Content verticalAlign='middle'>
                    <Item.Header>
                        <Link to={composeSearchLinkFromCompany(company)} className="ta-company__link">
                            {company.name} - {company.city}
                        </Link>
                    </Item.Header>                    
                    <Item.Description>
                        {company.address}
                    </Item.Description>
                    <Item.Extra>
                        <Rating maxRating={5} defaultRating={company.rating} disabled icon='star' size='mini' />
                    </Item.Extra>                    
                </Item.Content>
            </Item>
        );
    };

    formatValue(value) {
        return value ? value.name : '';
    }

    render() {        
        const { 
            isLoading,
            companies,
            value,
            onSelect,
            onChange,
            search,
            reset,
            onSubmit,
            ...rest
        } = this.props;

        return (
            <Form onSubmit={onSubmit}>
                <Search
                    field="company"
                    minCharacters={3}
                    loading={isLoading}
                    resultRenderer={this.resultRenderer}
                    onSelect={onSelect}
                    onSeachChange={onChange}
                    onReset={reset}
                    onSearch={search}
                    results={companies}
                    value={value}
                    formatValue={this.formatValue}
                    {...rest}
                />
            </Form>
        );
    }
}

export default connect(
    state => ({
        companies: getSeachResults(state),
        isLoading: getLoadingStatus(state),
    }),
    ({ companySearch }) => ({
        reset: companySearch.reset,
        search: debounce(companySearch.search, 300),        
        onSelect: companySearch.onSelect,
    })
)(CompanySearch);
