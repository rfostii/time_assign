import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { 
    Header,
    FormComponents, 
    Checkbox 
} from '../';

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

    componentDidUpdate(prevProps) {
        const { selected } = this.props;
        if (prevProps.selected !== selected) {
            this.preselect(selected);
        }
    }

    preselect(selected) {
        this.selectedCheckboxes.clear();
        selected.forEach(option => {
            this.selectedCheckboxes.add(option);
        });
    }

    isSelected(value) {
        const { selected } = this.props;
        return selected.includes(value);
    }

    onSelect = (value, checked) => {
        const { field, onFilterChange } = this.props;
        
        if (checked) {
            this.selectedCheckboxes.add(value);
        } else {
            this.selectedCheckboxes.delete(value);
        }        
        onFilterChange(field, Array.from(this.selectedCheckboxes));
    }

    render() {
        const {
            title,
            options,
            field,
        } = this.props;

        return (
            <FormComponents.Group grouped>
                <Header as="h3">{title}</Header>
                {options.map(option => (
                    <Checkbox 
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
