import { useEffect, useCallback, useState } from "react";

const changeDate = (time, minutes, onMinute) => {
  let add = 0;
  onMinute = Number(onMinute);
  if (minutes === onMinute) {
    return null;
  } else if (minutes > 45 && minutes <= 59 && onMinute >= 0 && onMinute < 15) {
    add = 60 - minutes + onMinute;
  } else if (minutes >= 0 && minutes < 15 && onMinute <= 59 && onMinute > 45) {
    add = (60 - onMinute + minutes) * -1;
  } else {
    add = onMinute - minutes;
  }
  return new Date(add * 60000 + time);
};

export const useTime = (isInteractive) => {
  const now = new Date();
  const [time, setTime] = useState(now.getTime());
  const [seconds, setSeconds] = useState(now.getSeconds());
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [hours, setHours] = useState(now.getHours());

  const moveOnMinute = useCallback((time, prevMinutes, onMinute) => {
    const newDate = changeDate(time, prevMinutes, onMinute);
    if (newDate === null) {
      return;
    }
    setTime(newDate.getTime());
    setMinutes(newDate.getMinutes());
    setHours(newDate.getHours());
  }, []);

  useEffect(() => {
    if (isInteractive) {
      return;
    }
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now.getTime());
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setHours(now.getHours());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isInteractive]);

  return [time, seconds, minutes, hours, moveOnMinute];
};
