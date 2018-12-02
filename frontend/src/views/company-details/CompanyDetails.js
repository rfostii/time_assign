import React, { Component } from 'react';
import {
    Container, Grid, Breadcrumb, Divider
} from 'semantic-ui-react';
import Navigation from '../../components/navigation/Navigation';
import CompanyInfo from '../../features/company/company-details/CompanyDetails';
import TimeAssignCalendar from '../../features/calendar/Calendar';

import './style.css';

export default class CompanyPage extends Component {
    render() {
        return (
            <Container className="ta-company-page">
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
                            <CompanyInfo />
                            <Divider />
                            <TimeAssignCalendar />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
