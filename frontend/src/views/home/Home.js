import React, { PureComponent } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navigation from '../../components/navigation/Navigation'; 
import Categories from '../../features/company/category/Categories'; 
import Search from '../../features/company/search/Search';

import './style.css';

class Home extends PureComponent {  
  render() {
    return (
        <Container className="ta-home-page">
            <Navigation />  
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Search />
                    </Grid.Column>
                    <Grid.Column width={16}>                        
                        <Categories />  
                    </Grid.Column>

                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}

export default Home;
