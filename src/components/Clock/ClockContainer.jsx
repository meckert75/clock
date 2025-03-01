import { useState, useEffect } from 'react';
import ClockCard from './ClockCard.jsx';
import './ClockContainer.css';

const ClockContainer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 40);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
        <ClockCard time={time} />
        {/*
        <ClockCard time={time} timezone="CET" />
        <ClockCard time={time} timezone="IST" />
        */}
    </div>
  );
}

export default ClockContainer;

