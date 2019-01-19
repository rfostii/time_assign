import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Breadcrumb } from 'semantic-ui-react';
import { pages } from './constants';

export default class extends PureComponent {
    static propTypes = {
        step: PropTypes.number.isRequired,
    };

    pages = pages;

    render() {        
        const { step } = this.props;
        const pagesToRender = this.pages.slice(0, step);
        const pages = pagesToRender.length - 1;

        return (
            <Breadcrumb className="ta-breadcrumb">
                {pagesToRender.map((page, index) => (
                    <Fragment key={shortid.generate()}>
                        <Breadcrumb.Section active={pages === index}>
                            {page.title}
                        </Breadcrumb.Section>
                        {index !== pages && <Breadcrumb.Divider icon='right angle' />}
                    </Fragment>
                ))}                
            </Breadcrumb>
        );
    }
}
