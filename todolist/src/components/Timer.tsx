import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock-title">⏰ Live Clock</h1>
      <div className="clock-time">{time.toLocaleTimeString()}</div>
      <div className="clock-date">{time.toLocaleDateString()}</div>
    </div>
  );
};

export default Clock;
