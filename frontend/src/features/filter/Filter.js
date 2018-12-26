import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { Segment, Form } from 'semantic-ui-react';
import FilterGroup from '../../components/filter-group/FilterGroup';

export class Filter extends PureComponent {
    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.props.onFilterChange(name, value);
    };

    onFilterChange = (name, selectedItems) => {        
        this.props.onFilterChange(name, selectedItems);
    };

    render() {
        return (
            <Segment style={{ maxWidth: 400, textAlign: 'left' }}>
                <Form>
                    <Form.Field>
                        <Form.Input 
                            fluid 
                            label='From' 
                            placeholder='From' 
                            name='priceFrom' 
                            value={this.props.priceFrom}
                            onChange={this.onInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input 
                            fluid 
                            label='To' 
                            placeholder='To' 
                            name='priceTo' 
                            value={this.props.priceTo}
                            onChange={this.onInputChange}
                        />
                    </Form.Field>  
                    <FilterGroup 
                        title="Category"
                        name="category" 
                        options={[
                            { label: 'Medicine', value: 1 },
                            { label: 'Cafe', value: 2 },
                        ]} 
                        selected={this.props.category}
                        onFilterChange={this.onFilterChange}
                    /> 
                    <FilterGroup 
                        title="Payment"
                        name="policy" 
                        options={[
                            { label: 'Prepaid', value: 1 },
                            { label: 'Paid', value: 2 },
                        ]} 
                        selected={this.props.policy}
                        onFilterChange={this.onFilterChange}
                    />                                        
                </Form>
            </Segment>
        );
    }
}
   
export default connect(
  state => ({
        
  }),
  dispatch => ({
        
  })
)(Filter);