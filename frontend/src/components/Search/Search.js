import React, { Component } from 'react';
import { Search as BaseSearch } from 'semantic-ui-react';
import './Search.css';


export default class Search extends Component {
    constructor() {
        super();

        this.resetComponent = this.resetComponent.bind(this);
        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentWillMount() {
        this.resetComponent();
      }
    
    resetComponent() {
        this.setState({ 
            isLoading: false,
            results: [], 
            value: ''
        });
    }
    
    handleResultSelect(e, { result }) {
        this.setState({ value: result.title });
    }
    
    handleSearchChange(e, { value }) {
        this.setState({ isLoading: true, value });
    }
    
    render() {
        const { isLoading, value, results } = this.state;

        return <BaseSearch action='Пошук' 
                fluid
                size='huge'    
                className='search-field'          
                minCharacters={3}
                noResultsMessage='Нічого не знайдено'
                placeholder='Пошук...'
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                {...this.props} />;
    }    
};