import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Grid,
    Breadcrumb,
    withScreen,
    Sidebar,
} from '../../components';
import Navigation from '../../features/navigation/Navigation';
import Categories from '../../features/company/categories/Categories';
import Filters from '../../features/filters/Filters';
import SearchResults from '../../features/company/search-results/SearchResults';

import './style.css';

export class SearchResultsPage extends PureComponent {
    static propTypes = {
        screen: PropTypes.object.isRequired,
    };

    renderMobile() {
        return (
            <Sidebar title="Фільтри" content={<Filters />}>
                <SearchResults />
            </Sidebar>
        );
    }

    renderDesktop() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Breadcrumb step={2} />
                    </Grid.Column>
                </Grid.Row>        
                <Grid.Row>           
                    <Grid.Column computer={4} tablet={5}>
                        <Filters />
                    </Grid.Column>
                    <Grid.Column computer={12} tablet={11}>
                        <SearchResults />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    render() {
        const { screen } = this.props;

        return (
            <Container className="ta-search-results">
                <Navigation />
                <Categories />              
                {
                    screen.isMobile 
                        ? this.renderMobile()
                        : this.renderDesktop()
                }
            </Container>
        );
    }
}

export default withScreen({ watch: true })(SearchResultsPage);
