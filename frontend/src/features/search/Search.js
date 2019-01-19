import React, { PureComponent } from 'react';
import {
    Tab,
    Segment
} from '../../components';
import SeachForm from './components/SearchForm';
import CompanySearch from '../company/company-search/CompanySearch';

import './style.css';

export default class Search extends PureComponent {
    panes = [
        {
            menuItem: { key: 'find', icon: 'building outline', content: 'Знайти заклад' },
            render: () => this.renderSearchForm(),
        },
        {
            menuItem: { key: 'autocomplete', icon: 'search', content: 'Знайти по імені' },
            render: () => this.renderCompanySearch(),
        },        
    ];

    renderSearchForm() {
        return (
            <Tab.Pane>
                <SeachForm />
            </Tab.Pane>
        );
    }

    renderCompanySearch() {
        return (
            <Tab.Pane>
                <CompanySearch 
                    attributes={{
                        fluid: true
                    }} 
                />
            </Tab.Pane>
        );
    }

    render() {
        return (
            <Segment className="ta-search">
                <Tab 
                    className="ta-search__tab"
                    menu={{ secondary: true, pointing: true }}
                    panes={this.panes} />
            </Segment>
        );
    }
}
