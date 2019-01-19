import React, { PureComponent } from 'react';
import { 
    Container,
    Grid,
    Breadcrumb
} from '../../components';
import Navigation from '../../features/navigation/Navigation';
import Filters from '../../features/filters/Filters';
import SearchResults from '../../features/company/search-results/SearchResults';

import './style.css';

export default class extends PureComponent {
  render() {
    return (
        <Container className="ta-search-results">
            <Navigation />
            <Breadcrumb step={2} />
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={5}>
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
