import React, { Component } from 'react';
import { 
    Container, Grid, Dimmer, Loader, Item, Label,
    Button, Icon, Breadcrumb
} from 'semantic-ui-react/dist/commonjs';
import Navigation from 'components/Navigation'; 
import Search from 'features/Company/CompanySearch';
import Filter from 'features/Filter';
import CompaniesList from 'features/Company/CompaniesList';
import './SearchResults.css';


class SearchResults extends Component {  
  render() {    
    return (
        <Container className="tm-search-results">
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
