import React, { PureComponent } from 'react';
import { Calendar } from '../../components';

import './style.css';

class AssigmentCalendar extends PureComponent {
    state = {
        schedules: [
            {
                id: '1',
                calendarId: '1',
                title: 'my schedule',
                category: 'time',
                dueDateClass: '',
                start: '2019-01-10T22:30:00+09:00',
                end: '2019-01-11T02:30:00+09:00'
            },
            {
                id: '2',
                calendarId: '1',
                title: 'second schedule',
                category: 'time',
                dueDateClass: '',
                start: '2019-01-02T17:30:00+09:00',
                end: '2019-01-03T17:31:00+09:00'
            }
        ]
    }
    addSchedule = () => {
        this.setState(({schedules}) => ({schedules: [...schedules, {
                id: '2',
                calendarId: '1',
                title: 'second schedule',
                category: 'time',
                dueDateClass: '',
                start: '2019-01-2T17:30:00+09:00',
                end: '2019-01-5T17:31:00+09:00'
            }]}))
    }
    render() {
        return (
            <div>
                <button onClick={this.addSchedule}>Add schedule</button>
                <Calendar
                    schedules={this.state.schedules}
                />
            </div>
        )
    }
}

export default AssigmentCalendar;
