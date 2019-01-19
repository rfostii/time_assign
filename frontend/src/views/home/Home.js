import React, { PureComponent } from 'react';
import { 
    Container, 
    Grid
} from '../../components';
import Navigation from '../../features/navigation/Navigation';
import Categories from '../../features/company/categories/Categories';
import Search from '../../features/search/Search';

import './style.css';

export default class extends PureComponent {  
  render() {
    return (
        <Container className="ta-home-page">
            <Navigation />
            <Categories />
            <Container className="ta-home-page__header">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={12} mobile={16}>
                            <Search />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>            
        </Container>
    );  
  }
}
