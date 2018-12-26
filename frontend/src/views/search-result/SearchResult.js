import React, { Component } from 'react';
import { 
    Container, Grid, Breadcrumb
} from 'semantic-ui-react';
import Navigation from '../../features/navigation/Navigation'; 
import Search from '../../features/search/Search';
import Filter from '../../features/filter/Filter';
import CompaniesList from '../../features/company/search-results/SearchResults';

import './style.css';

class SearchResults extends Component {  
  render() {    
    return (
        <Container className="ta-search-results">
            <Navigation />              
            <Breadcrumb className="ta-breadcrumb">
                <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>Search Results</Breadcrumb.Section>                
            </Breadcrumb>            
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Search />
                    <Filter />
                    </Grid.Column>
                    <Grid.Column width={12}>                        
                        <CompaniesList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}

export default SearchResults;
