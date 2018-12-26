import React, { PureComponent } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, Header } from '../../components';

export default class FilterGroup extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onFilterChange: PropTypes.func,
        selected: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
    };

    static defaultProps = {
        selected: [],
        onFilterChange: null,
    };

    constructor(props) {
        super();
        const { selected } = props;
        this.selectedCheckboxes = new Set();
        this.preselect(selected);
    }

    preselect(selected) {
        const items = Array.isArray(selected) ? selected : [selected];
        items.forEach(i => this.selectedCheckboxes.add(i.toString()));
    }

    isSelected(value) {
        return this.props.selected && 
            this.props.selected.includes(value.toString());
    }

    onSelect = (e, control) => {  
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
        const {
            title,
            options,
            name,            
            onFilterChange
         } = this.props;

        return (
            <Form.Group grouped onChange={onFilterChange}>
                <Header as='h3'>{title}</Header>
                {options.map(option => (
                    <Form.Checkbox
                        key={shortid.generate()}
                        name={name}
                        label={option.label}                        
                        value={option.value}
                        onChange={this.onSelect}  
                        defaultChecked={this.isSelected(option.value)}
                    />
                ))}                            
            </Form.Group>
        );
    }
}
