import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const DAYS = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П\'ятниця',
    'Субота',
    'Неділя'
];

export default class AvailableTimes extends PureComponent {
    static propTypes = {
        company: PropTypes.object.isRequired
    };

    render() {
        const { company } = this.props;

        return ( 
            <table className="ta-venue-opening-times__table ta-search-result-quickview__opening-times-container">
                <tbody>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__highlighted ta-venue-opening-times__bold ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator" />
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Пон
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Понеділок
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>                    
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div><span className="ta-venue-opening-times__label-dayname-short">
                        Вів
                    </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Вівторок
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div>
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Сер
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Середа
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div>
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Чет
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Четвер
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div>
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Пт
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            П'ятниця
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__open">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div>
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Суб
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Субота
                        </span>
                    </td>
                    <td>
                        10:30
                    </td>                    
                    <td className="ta-venue-opening-times__separator-column">
                        –
                    </td>
                    <td>
                        21:00
                    </td>
                </tr>
                <tr className="ta-venue-opening-times__row ta-venue-opening-times__closed">
                    <td className="ta-venue-opening-times__day-column">
                        <div className="ta-venue-opening-times__indicator">
                        </div>
                        <span className="ta-venue-opening-times__label-dayname-short">
                            Нед
                        </span>
                        <span className="ta-venue-opening-times__label-dayname">
                            Неділя
                        </span>
                    </td>
                    <td colSpan="5">
                        Зачинено
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
