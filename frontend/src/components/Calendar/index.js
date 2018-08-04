import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';


BigCalendar.momentLocalizer(moment);

export default props => (
  <React.Fragment>
    <BigCalendar
      className="tm-calendar"
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
      defaultDate={moment().toDate()}
    />
  </React.Fragment>
);