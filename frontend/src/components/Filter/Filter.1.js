import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Segment, Form, Header } from 'semantic-ui-react';
import FilterGroup from './FilterGroup';


const Filter = props => {    
    return (
        <Segment style={{ maxWidth: 400, textAlign: 'left' }}>
            <Form onSubmit={props.handleSubmit}>
                <Field
                    component={Form.Input}
                    fluid 
                    label='From' 
                    placeholder='From' 
                    name='priceFrom' 
                    value={props.priceFrom}
                />                                    
                <Field
                    component={Form.Input}
                    fluid 
                    label='To' 
                    placeholder='To' 
                    name='priceTo'
                    value={props.priceTo}
                />   
                <Form.Group grouped>
                    <Header as='h3'>Category</Header>             
                    {[
                        { label: 'Medicine', value: 1 },
                        { label: 'Cafe', value: 2 },
                    ].map(options => 
                        <Field    
                            type="checkbox"                    
                            component={Form.Checkbox}                             
                            name="category"
                            {...options}
                        />
                    )} 
                </Form.Group>
                <Form.Group grouped>
                    <Header as='h3'>Payment</Header>
                    {[
                        { label: 'Prepaid', value: 1 },
                        { label: 'Paid', value: 2 },
                    ].map(options => 
                        <Field  
                            type="checkbox"                      
                            component={Form.Checkbox}                         
                            name="policy" 
                            {...options}
                        />
                    )}      
                </Form.Group>                          
            </Form>
        </Segment>
    );
};

export default reduxForm({  
    form: 'filter'
})(Filter);