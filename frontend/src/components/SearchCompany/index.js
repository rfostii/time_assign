import React, { Component } from 'react';
import { Link } from 'react-router';
import { Search as BaseSearch, Item } from 'semantic-ui-react';
import './Search.css';


export default class Search extends Component {
    constructor() {
        super();

        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.resultRenderer = this.resultRenderer.bind(this);
    }

    componentWillMount() {
        this.props.reset && this.props.reset();
    }

    resultRenderer(result) {        
        return (
            <Item key={result.id}>
                <Item.Image size='tiny' src={result.logo} />                
                <Item.Content verticalAlign='middle'>
                    <Item.Header>
                        <Link to={'/company/' + result.slug} 
                              className="company__link"
                              activeClassName="company__link--active">{result.name}</Link>                    
                    </Item.Header>
                </Item.Content>
            </Item>
        );
    }
    
    handleResultSelect(e, { result }) {
        this.props.onSelect && this.props.onSelect(result);
    }
    
    handleSearchChange(e, { value }) {
        if (value.length > 2) {
            this.props.onSearch && this.props.onSearch(value);
        }        
    }
    
    render() {
        const { isLoading, value, results } = this.props;

        return <BaseSearch action='Пошук' 
                fluid
                size='huge'    
                className='search-field'          
                minCharacters={3}
                noResultsMessage='Нічого не знайдено'
                placeholder='Пошук...'
                loading={isLoading}
                resultRenderer={this.resultRenderer}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}/>;
    }    
};