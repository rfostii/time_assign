import React, { PureComponent } from 'react';
import { 
    Container, Grid
} from '../../components';
import Breadcrumb from '../../features/breadcrumb/Breadcrumb';
import Navigation from '../../features/navigation/Navigation'; 
import Search from '../../features/search/Search';
import Filters from '../../features/filters/Filters';
import SearchResults from '../../features/company/search-results/SearchResults';

import './style.css';

export default class extends PureComponent {
  render() {    
    return (
        <Container className="ta-search-results">
            <Navigation />
            <Breadcrumb active="search_results" />
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Search attributes={{ fluid: true }} />
                        <Filters />
                    </Grid.Column>
                    <Grid.Column width={11}>  
                        <SearchResults />                                              
                    </Grid.Column>
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}
