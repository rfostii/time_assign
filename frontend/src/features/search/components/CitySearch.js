import React, { PureComponent } from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Search, Item } from '../../../components';
import { getCities } from '../model';

export class CitySearch extends PureComponent {
    static propTypes = {        
        cities: PropTypes.array.isRequired,        
        search: PropTypes.func.isRequired,        
        onSelect: PropTypes.func,
    };

    static defaultProps = {
        value: '',
        onSelect: null,
    };

    resultRenderer = (result) => {
        return (
            <Item key={result.id}>
                <Item.Content verticalAlign='middle'>
                    {result.city}
                </Item.Content>
            </Item>
        );
    };

    formatValue(value) {
        return value ? value.city : '';
    }

    render() {
        const {
            cities,
            onSelect,
            search,
            ...rest
        } = this.props;

        return <Search
                    field="city"
                    minCharacters={3}
                    resultRenderer={this.resultRenderer}
                    onSelect={onSelect}
                    onSearch={search}
                    results={cities}                    
                    attributes={{
                        placeholder: 'Введіть назву населеного пункту',
                    }}
                    formatValue={this.formatValue}
                    {...rest}                 
                />;
    }
}

export default connect(
    state => ({
        cities: getCities(state),
    }),
    ({ searchForm }) => ({
        search: debounce(searchForm.loadCities, 300),
    })
)(CitySearch);
