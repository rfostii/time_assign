import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

import { Link } from 'react-router-dom';
import { 
    Icon,
    Button,
    Rating,
    Image
} from '../../../../../components';
import CompanyItemService from './CompanyItemService';
import AvailableTimes from './AvailableTimes';

export default class CompanyItem extends PureComponent {
    static propTypes = {
        company: PropTypes.object.isRequired
    };

    state = {
        detailsCollapsed: true
    };

    toggleDetails = () => {
        const { detailsCollapsed } = this.state;

        this.setState(() => ({ detailsCollapsed: !detailsCollapsed }));
    };

    render() {
        const { detailsCollapsed } = this.state;
        const { company } = this.props;

        return (            
            <div className="ta-search-result">
                <Link to={'/company/' + company.slug}>
                    <div className="ta-search-result-summary__container">                        
                        <div className="ta-search-result-summary__image-container">
                            <Image className="ta-search-result-summary__image" src={company.logo} size="medium" />
                            <div className="eyecatcher__banner-container">
                                <div className="eyecatcher__banner">
                                    Новий
                                </div>
                            </div>
                        </div>                        
                        <div className="ta-search-result-summary__text-container">
                            <h3 className="ta-search-result-summary__name">
                                {company.name}
                            </h3>
                            <div className="ta-search-result-summary__location-container">
                                <div className="ta-search-result-summary__label">
                                    {[ company.city, company.street + ' ' + company.house_number ].join(', ')}
                                </div>
                            </div>
                            <div className="ta-search-result-summary__rating-container">
                                <div className="ta-search-result-summary__rating">
                                    <div className="rating__container">
                                        <span className="rating__label">
                                            {company.rating}
                                        </span>
                                        <div className="rating__star-container">
                                            <Rating maxRating={5} defaultRating={company.rating} disabled icon='star' size='small' />                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="ta-search-result-summary__label">
                                    {company.feedbacks_total} відгуків
                                </div>
                            </div>
                        </div>
                    </div>
                    {company.services.map((service, index) => (
                        <CompanyItemService service={service} index={index} />
                    ))}                    
                </Link>
                <Button 
                    className="ta-search-result-quickview__more" 
                    basic 
                    fluid
                    onClick={this.toggleDetails}
                >
                    <span className="ta-search-result-quickview__cta">
                        Деталі
                    </span>
                    <Icon 
                        className="ta-search-result-quickview__chevron" 
                        name={detailsCollapsed ? 'chevron down' : 'chevron up'}
                    />
                </Button>
                <div className={classnames(
                    'ta-search-result-quickview__content',
                    detailsCollapsed &&  'ta-search-result-quickview__content--collapsed'
                )}>
                    <div className="ta-search-result-quickview__content-inner">
                        <AvailableTimes company={company} />
                        <div className="ta-search-result-quickview__description">
                            <p>
                                {company.description}
                            </p>
                        </div>
                        <Button className="ta-search-result-quickview__button" primary wide>
                            Записатися
                        </Button>
                    </div>
                </div>
            </div>                    
        );
    }
}