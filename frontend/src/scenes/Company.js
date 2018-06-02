import React, { Component } from 'react';
import { 
    Container, Grid, Dimmer, Loader, Item, Label,
    Button, Icon, Breadcrumb
} from 'semantic-ui-react';
import './CompanyPage.css';
import Navigation from '../components/Navigation/Navigation'; 
import TimeAssignCalendar from '../components/Calendar/Calendar';


export default class CompanyPage extends Component {
  render() {
    return (
        <Container className="company-page">
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
                        <TimeAssignCalendar/>                
                    </Grid.Column>
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}
