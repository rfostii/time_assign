import React, { Component } from 'react';
import { 
    Container, Grid, Breadcrumb, Divider
} from 'semantic-ui-react'; 
import Navigation from 'components/Navigation'; 
import Company from 'features/Company';
import TimeAssignCalendar from 'components/Calendar';
import './Company.css';


export default class CompanyPage extends Component {
  render() {    
    return (
        <Container className="tm-company-page">
            <Navigation />              
            <Breadcrumb className="ta-breadcrumb">
                <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section>Search Results</Breadcrumb.Section>                
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>Company</Breadcrumb.Section>                
            </Breadcrumb>            
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={4}>
                    
                    </Grid.Column>
                    <Grid.Column width={12}>   
                        <Company />
                        <Divider />                                             
                        <TimeAssignCalendar/>                
                    </Grid.Column>
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}
