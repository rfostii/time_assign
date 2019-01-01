import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Segment, 
    Form,
    Filter,
    Range,
} from '../../components';
import { getFilters } from './model';
import { FILTERS } from './constants';

class Filters extends PureComponent {
    static propTypes = {
        filters: PropTypes.object.isRequired,
        onFilterChange: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    };

    componentWillUnmount() {
        const { reset } = this.props;
        reset();
    }

    onFilterChange = (name, value) => {
        const { onFilterChange } = this.props;     
        onFilterChange({ name, value });
    };

    onPriceRangeChange = (value) => {
        const { onFilterChange } = this.props;     
        onFilterChange({ name: 'price', value });
    };    

    render() {    
        const { filters: { price, category, procedure } } = this.props;
        const categoryFilter = FILTERS.category;
        const procedureFilter = FILTERS.procedure;
        const priceFilter = FILTERS.price;

        return (
            <Segment style={{ maxWidth: 400, textAlign: 'left' }}>
                <Form>         
                    <Range
                        title={priceFilter.title}
                        field="price"
                        maxValue={priceFilter.maxValue}
                        minValue={priceFilter.minValue}
                        step={priceFilter.step}
                        value={price}
                        allowSameValues
                        draggableTrack
                        onChangeComplete={this.onPriceRangeChange} 
                    />
                    <Filter
                        title={categoryFilter.title}
                        key={categoryFilter.id}
                        field="category"
                        options={categoryFilter.options}
                        selected={category}
                        onFilterChange={this.onFilterChange}
                    />
                    <Filter
                        title={procedureFilter.title}
                        key={procedureFilter.id}
                        field="procedure"
                        options={procedureFilter.options}
                        selected={procedure}
                        onFilterChange={this.onFilterChange}
                    />                                                              
                </Form>
            </Segment>
        );
    }
}
   
export default connect(
    state => ({
        filters: getFilters(state),
    }),
    dispatch => ({        
        onFilterChange: dispatch.filters.filter,
        reset: dispatch.filters.reset,
    })
)(Filters);