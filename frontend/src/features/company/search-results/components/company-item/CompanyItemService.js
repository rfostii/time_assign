import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

export default class CompanyItemService extends PureComponent {
    static propTypes = {
        service: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
    };

    render() {
        const { index, service } = this.props;

        return ( 
            <div className={classnames(
                'ta-search-result-service__container',
                !(index % 2) && 'ta-search-result-Service__alternate-row-style'
            )}>
                <div className="ta-search-result-service__info-container">
                    <div className="ta-search-result-service__name">
                        {service.name}
                    </div>
                    <div className="ta-search-result-service__duration">
                    {`${service.duration} ${service.period}`}                        
                    </div>
                </div>
                <div className="ta-search-result-service__price-container">
                    <div className="ta-search-result-service__price-label">
                        <span className="ta-search-result-service__price">
                            {`${service.price} ${service.currency}`}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
