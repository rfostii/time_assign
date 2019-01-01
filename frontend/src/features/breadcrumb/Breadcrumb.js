import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Breadcrumb } from '../../components';

export default class extends PureComponent {
    static propTypes = {
        active: PropTypes.string.isRequired,
    };

    pages = [
        { 
            url: '/', 
            name: 'home', 
            title: 'Головна'
        },
        { 
            url: '/search_results',
            name: 'search_results',
            title: 'Результати пошуку'
        },
    ];

    render() {
        const pages = this.pages.length;
        const { active } = this.props;

        return (
            <Breadcrumb className="ta-breadcrumb">
                {this.pages.map((page, index) => (
                    <Fragment key={shortid.generate()}>
                        <Breadcrumb.Section active={active === page.name}>
                            {page.title}
                        </Breadcrumb.Section>
                        {index !== pages - 1 && <Breadcrumb.Divider icon='right angle' />}
                    </Fragment>
                ))}                
            </Breadcrumb>
        );
    }
}
