import React from 'react';
import Clock from './Clock.jsx';
import './ClockCard.css';
import { formatInTimeZone } from "date-fns-tz";

const ClockCard = ({ time, timezone = Intl.DateTimeFormat().resolvedOptions().timeZone }) => {
    const getTimeZoneLabel = (time, timezone) => {
        return formatInTimeZone(time, timezone, 'zzz');
    };

    return (
        <div className="clock-card">
        <Clock time={time} timezone={timezone} />
        <p>{getTimeZoneLabel(time, timezone)}</p>
        </div>
    );
}
  
export default ClockCard;