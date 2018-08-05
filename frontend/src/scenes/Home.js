import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navigation from 'components/Navigation'; 
import Categories from 'components/Category/Categories'; 
import CompanySearch from 'features/Company/CompanySearch';
import './Home.css';


class Home extends Component {  
  render() {
    return (
        <Container className="tm-home-page">
            <Navigation />  
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={16}>
                    <CompanySearch />
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
