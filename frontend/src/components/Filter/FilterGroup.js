import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Header } from 'semantic-ui-react';


export default class FilterGroup extends Component {
    constructor(props) {
        super();                
        this.selectedCheckboxes = new Set();
        this.preselect(props.selected);
        this.isSelected = this.isSelected.bind(this);
        this.onSelect = this.onSelect.bind(this);        
    }

    preselect(selected) {
        const items = Array.isArray(selected) ? selected : [selected];
        items.forEach(i => this.selectedCheckboxes.add(i.toString()));
    }

    isSelected(value) {
        return this.props.selected && 
            this.props.selected.includes(value.toString());
    }

    onSelect(e, control) {  
        const value = control.value.toString();      
        if (this.selectedCheckboxes.has(value)) {
            this.selectedCheckboxes.delete(value);
        } else {
            this.selectedCheckboxes.add(value);
        }        
        this.props.onFilterChange(
            this.props.name,
            Array.from(this.selectedCheckboxes)
        );
    }

    render() {
        return (
            <Form.Group grouped onChange={this.onFilterChange}>
                <Header as='h3'>{this.props.title}</Header>
                {this.props.options.map((option, index) => (
                    <Form.Checkbox 
                        key={index}
                        label={option.label}
                        name={this.props.name} 
                        value={option.value}
                        onChange={this.onSelect}  
                        defaultChecked={this.isSelected(option.value)}
                    />
                ))}                            
            </Form.Group>
        );
    }
}

FilterGroup.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};

FilterGroup.defaultProps = {
    selected: []
};