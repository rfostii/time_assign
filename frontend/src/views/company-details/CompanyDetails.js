import React, { PureComponent } from 'react';
import {
    Container, 
    Grid,
    Breadcrumb,
} from '../../components';
import Navigation from '../../features/navigation/Navigation';
import CompanyDetails from '../../features/company/company-details/CompanyDetails';
import AssigmentCalendar from '../../features/assigment-calendar/AssigmentCalendar';

import './style.css';

export default class extends PureComponent {
    render() {
        return (
            <Container className="ta-company-page">
                <Navigation />
                <Breadcrumb step={3} />
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <CompanyDetails />
                            <AssigmentCalendar />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
