import React, { PureComponent } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navigation from '../../features/navigation/Navigation';
import Search from '../../features/search/Search';

import './style.css';

class Home extends PureComponent {  
  render() {
    return (
        <Container className="ta-home-page">
            <Navigation />  
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Search attributes={{ fluid: true, size: 'huge' }} />
                    </Grid.Column>            
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}

export default Home;
