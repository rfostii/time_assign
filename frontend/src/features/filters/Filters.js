import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Form,
    Filter,
    Range,
} from '../../components';
import { getFilters } from './model';
import CitySearch from '../search/components/CitySearch';

class Filters extends PureComponent {
    static propTypes = {
        filters: PropTypes.object.isRequired,     
        onInit: PropTypes.func.isRequired,
        onFilterChange: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { onInit } = this.props;
        onInit();
    }

    componentWillUnmount() {
        const { reset } = this.props;
        reset();
    }

    onMultiFilterChange = (name, value) => {
        const { onFilterChange } = this.props;     
        onFilterChange({ name, value });
    };

    onPriceRangeChange = (value) => {
        const { onFilterChange } = this.props;     
        onFilterChange({ name: 'price', value });
    };

    onCitySelect = ({ city }) => {
        const { onFilterChange } = this.props;
        onFilterChange({ name: 'city', value: city });
    }

    render() {    
        const { filters: { price, category, procedure } } = this.props;

        return (
            <Form>
                <CitySearch
                    label="Населений пункт"
                    onSelect={this.onCitySelect}
                />
                <Range
                    title="Ціновий діапазон (грн)"
                    field="price"
                    maxValue={500}
                    minValue={0}
                    step={1}
                    value={price}
                    allowSameValues
                    draggableTrack
                    onChangeComplete={this.onPriceRangeChange} 
                />
                <Filter
                    title="Категорія"
                    field="category"
                    options={[
                        { name: 'Стоматологія', value: '4' },
                        { name: 'Перукарня', value: '2' },
                        { name: 'Салон краси', value: '1' },
                    ]}
                    selected={category}
                    onFilterChange={this.onMultiFilterChange}
                />
                <Filter
                    title="Послуги"
                    field="procedure"
                    options={[
                        { name: 'Стрижка чоловіча', value: '1' },
                    ]}
                    selected={procedure}
                    onFilterChange={this.onMultiFilterChange}
                />                                                              
            </Form>
        );
    }
}
   
export default connect(
    state => ({
        filters: getFilters(state),
    }),
    dispatch => ({
        onInit: dispatch.filters.init,
        onFilterChange: dispatch.filters.filter,
        reset: dispatch.filters.reset,
    })
)(Filters);
