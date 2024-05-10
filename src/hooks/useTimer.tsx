import { useEffect, useState } from 'react';

function useTimer(isPlaying: boolean): [number[], number, () => void] {
  const [time, setTime] = useState([0, 0, 0, 0]);
  const [timeInterval, setTimeInterval] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isPlaying && timeInterval < 200) {
      interval = setInterval(() => {
        setTime((prev) => {
          const newTime = [...prev];
          newTime[3] += 1;
          if (newTime[3] === 10) {
            newTime[3] = 0;
            newTime[2] += 1;
          }
          if (newTime[2] === 6) {
            newTime[2] = 0;
            newTime[1] += 1;
          }
          if (newTime[1] === 10) {
            newTime[1] = 0;
            newTime[0] += 1;
          }
          return newTime;
        });
        setTimeInterval((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, timeInterval]);

  const resetTimer = () => {
    setTime([0, 0, 0, 0]);
    setTimeInterval(0);
  };

  return [time, timeInterval, resetTimer];
}

export default useTimer;
