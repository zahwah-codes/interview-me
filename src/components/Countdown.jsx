import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate} from 'react-router-dom';

function MyTimer({ expiryTimestamp }) {
  const navigate = useNavigate();
  const {seconds, minutes} = useTimer({ expiryTimestamp, onExpire: () => navigate("/completed")});


  return (
    <div className="countdown" style={{textAlign: 'center'}}>
      <div>
        <h1><span className="countdown-txt">{minutes}</span>:<span className="countdown-txt">{seconds}</span></h1>
      </div>
    </div>
  );
}

export default function Countdown() {
  const navigate = useNavigate();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); // 2 minutes timer

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
      
    </div>
  );
}