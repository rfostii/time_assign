import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import BaseCalendar from 'tui-calendar';

import 'tui-calendar/dist/tui-calendar.css';
import './style.css';

const EVENT_TYPES = [
    'beforeCreateSchedule',
    'afterRenderSchedule',
    'beforeUpdateSchedule',
    'beforeDeleteSchedule',
    'clickSchedule',
    'clickDayname'
];

function getTimeTemplate(schedule, isAllDay) {
    const html = [];
    const start = moment(schedule.start.toUTCString(), 'HH:mm');

    if (!isAllDay) {
        html.push(`<strong>${start}</strong> `);
    }
    if (schedule.isPrivate) {
        html.push('<span class="calendar-font-icon ic-lock-b"></span>');
        html.push(' Private');
    } else {
        if (schedule.isReadOnly) {
            html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
            html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length > 0) {
            html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
            html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }
        html.push(' ' + schedule.title);
    }

    return html.join('');
}

export default class Calendar extends PureComponent {
    static propTypes = {
        schedules: PropTypes.array,
        options: PropTypes.object,
        ...EVENT_TYPES.reduce((acc, event) => ({ 
            ...acc, 
            [event]: PropTypes.func 
        }), {}),
    };

    static defaultProps = {
        schedules: [],
        options: {},
        ...EVENT_TYPES.reduce((acc, event) => ({ 
            ...acc, 
            [event]: () => {}
        }), {})
    };    

    calRef = createRef();

    componentDidMount() {
        const { options } = this.props;

        this.calendar = new BaseCalendar(this.calRef.current, {
            defaultView: 'month',
            taskView: true,
            useCreationPopup: true,
            useDetailPopup: true,
            timezones: [{
                timezoneOffset: 420,
                displayLabel: 'GMT+08:00',
                tooltip: 'Hong Kong'
            }],
            template: {
                monthGridHeader(model) {
                    const date = new Date(model.date);
                    const template = `<span class="tui-full-calendar-weekday-grid-date">${date.getDate()}</span>`;
                    return template;
                },
                milestone(model) {
                    return `
                        <span class="calendar-font-icon ic-milestone-b"></span>
                        <span style="background-color: ${model.bgColor}">${model.title}</span>
                    `;
                },
                allday(schedule) {
                    return getTimeTemplate(schedule, true);
                },
                time(schedule) {
                    return getTimeTemplate(schedule, false);
                }
            },
            ...options
        });
        this.registerEvents();
        this.renderCal();
    }

    componentDidUpdate(prevProps) {        
        EVENT_TYPES.forEach((event) => {
            if (this.props[event] !== prevProps[event]) {
                this.calendar.off(event)
                this.calendar.on(event, this.props[event])
            }
        });
        this.renderCal();
    }

    componentWillUnmount() {
        this.calendar.destroy();
    }

    registerEvents() {
        this.calendar.on(
            EVENT_TYPES.reduce((handlers, event) => ({ 
                ...handlers, 
                [event]: this.props[event] 
            }), {})
        );
    }

    renderCal() {
        this.calendar.clear();
        this.calendar.createSchedules(this.props.schedules);
        this.calendar.render();
    }

    render() {
        return (
            <div ref={this.calRef} style={{ height: 800 }} />
        );
    }
}
