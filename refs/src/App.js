import { useRef, useState } from 'react';

export default function App(){
  const [seconds, setSeconds] = useState(0);
  const [timerID, setTimerID] = useRef(null);


  const startTimer = () => {
   setTimerID(setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    },1000));
  };
  const stopTimer = () => {
    clearInterval(timerID);
  };

  return (
    <>
    <button onClick = {startTimer}>Start</button>
    <button onClick = {stopTimer}>Stop</button>
    <p>seconds : {seconds}</p>
    </>
  );
}