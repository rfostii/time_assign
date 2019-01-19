import React, { PureComponent } from 'react';
import { isString } from 'lodash';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Search as BaseSearch } from 'semantic-ui-react';
import { asField } from 'informed';

import './style.css';

export class Search extends PureComponent {
    static propTypes = {
        results: PropTypes.array.isRequired,
        onSearch: PropTypes.func.isRequired,
        resultRenderer: PropTypes.func.isRequired,
        fieldApi: PropTypes.object.isRequired, 
        fieldState: PropTypes.object.isRequired,
        forwardedRef: PropTypes.any.isRequired,
        field: PropTypes.string.isRequired,
        value: PropTypes.string,
        attributes: PropTypes.object,
        minCharacters: PropTypes.number,
        showError: PropTypes.bool,
        isLoading: PropTypes.bool,
        onReset: PropTypes.func,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        formatValue: PropTypes.func,
    };    

    static defaultProps = {
        value: '',
        attributes: {},
        minCharacters: 3,
        isLoading: false,
        onReset: null,
        onChange: null,
        onSelect: null,
        formatValue: null,
        showError: true,
    };

    id = shortid.generate();

    componentDidMount() {
        const { value, onSearch } = this.props;

        if (this.searchAllowed()) {
            onSearch(value);
        }
    }

    componentWillUnmount() {
        const { onReset } = this.props;
        onReset && onReset();
    }

    searchAllowed() {
        const { fieldState, minCharacters } = this.props;
        const { value } = fieldState;

        return value && value.length >= minCharacters;
    }

    handleResultSelect = (e, { result }) => {
        const { 
            onSelect, 
            fieldApi,
        } = this.props;
        const { setValue } = fieldApi;
                
        setValue(result);
        onSelect && onSelect(result);
    };

    handleSearchChange = (e, { value }) => {
        const {            
            onReset,
            onSearch,
            fieldApi,
            onChange,
        } = this.props;
        const { setValue } = fieldApi;
        
        setValue(value);
        onChange && onChange(value);

        if (!value.length) {
            onReset && onReset();
        }
        if (this.searchAllowed()) {
            onSearch(value);
        }
    };

    formatValue(value) {
        const {
            formatValue
        } = this.props;

        if (isString(value)) return value;
        return formatValue ? formatValue(value) : value
    }

    render() {
        const {
            isLoading,
            results,
            attributes,
            minCharacters,
            resultRenderer,
            fieldState,
            forwardedRef,
            field,
            fieldApi,
            value: initialValue,
            showError,
            label,
        } = this.props;
        const { setTouched } = fieldApi;
        const { value, error } = fieldState;
        const classes = classNames(
            'field',
            !!error && 'error'
        );

        return (
            <div className={classes}>
                {label && <label forHtml={this.id}>{label}</label>}
                <BaseSearch
                    id={this.id}
                    className="ta-search-field"
                    minCharacters={minCharacters}
                    action="Пошук"
                    ref={forwardedRef}
                    field={field}
                    name={field}
                    noResultsMessage="Нічого не знайдено"
                    placeholder="Пошук..."
                    loading={isLoading}
                    resultRenderer={resultRenderer}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    onBlur={setTouched}
                    results={results}
                    value={this.formatValue(value || initialValue)}
                    {...attributes}
                />
                {error && showError
                    ? <div className="ta-validation-error">{error}</div>
                    : null
                }
            </div>
        );
    }
}

export default asField(Search);
