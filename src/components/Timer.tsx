import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline : string = "November, 31, 2022";

  const getTime = (a : string) => {
    const time = Date.parse(deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center w-[300px] absolute md:bottom-[10px] bottom-[3px] md:left-[95px] left-[100px]">
        <p className='text-[#fff] bg-[#008DFF] mx-1 
        w-[32px] rounded-[5px] text-center p-[2px]'
        >{hours}</p>
        <p className='w-2 font-bold text-[#008DFF] mx-1'>:</p>
        <p className='text-[#fff] bg-[#008DFF]  mx-1
         w-[32px] rounded-[5px] text-center p-[2px]'
        >{minutes}</p>
        <p className='w-2 font-bold text-[#008DFF] mx-1'>:</p>
        <p className='text-[#fff] bg-[#008DFF]  mx-1
        w-[32px] rounded-[5px] text-center p-[2px]'
        >{seconds}</p>

    </div>
  );
};

export default Timer;