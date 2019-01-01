import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Header, Input, FormComponents } from '../';

export default class Filter extends PureComponent {
    static propTypes = {
        field: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onFilterChange: PropTypes.func,
        selected: PropTypes.array,
    };

    static defaultProps = {
        selected: [],
        onFilterChange: null,
    };

    selectedCheckboxes = new Set();

    componentDidMount() {
        const { selected } = this.props;
        if (!this.selectedCheckboxes.size && selected.length) {
            this.preselect(selected);
        }        
    }

    preselect(selected) {        
        selected.forEach(option => this.selectedCheckboxes.add(option));
    }

    isSelected(value) {
        const { selected } = this.props;
        return selected.includes(value);
    }

    onSelect = (e, control) => {
        const { field, onFilterChange } = this.props;
        const value = control.value;
        
        if (this.selectedCheckboxes.has(value)) {
            this.selectedCheckboxes.delete(value);
        } else {
            this.selectedCheckboxes.add(value);
        }        
        onFilterChange(field, Array.from(this.selectedCheckboxes));
    }

    render() {
        const {
            title,
            options,
            field,            
            onFilterChange
         } = this.props;

        return (
            <FormComponents.Group grouped onChange={onFilterChange}>
                <Header as="h3">{title}</Header>
                {options.map(option => (
                    <Input
                        component={FormComponents.Checkbox}
                        key={shortid.generate()}
                        field={field}
                        label={option.name}
                        value={option.value}
                        onChange={this.onSelect}  
                        defaultChecked={this.isSelected(option.value)}
                    />
                ))}                            
            </FormComponents.Group>
        );
    }
}
