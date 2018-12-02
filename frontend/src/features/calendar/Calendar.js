import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './style.css';

BigCalendar.momentLocalizer(moment);

export default props => (  
    <BigCalendar
      className="ta-calendar"
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
      defaultDate={moment().toDate()}
    />  
);