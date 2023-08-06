import { useEffect, useState } from "react";

export const useTime = () => {
  const now = new Date();
  const [dateNow, setDateNow] = useState(now);
  const [time, setTime] = useState(() => now.getTime());
  const [seconds, setSeconds] = useState(() => now.getSeconds());
  const [minutes, setMinutes] = useState(() => now.getMinutes());
  const [hours, setHours] = useState(() => now.getHours());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeNow = now.getTime();
      const secondsNow = now.getSeconds();
      setDateNow(now);
      setTime(timeNow);
      setSeconds(secondsNow);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const minutesNow = dateNow.getMinutes();
    const hoursNow = dateNow.getHours();
    if (minutesNow !== minutes) {
      setMinutes(minutesNow);
    }
    if (hoursNow !== hours) {
      setHours(hoursNow);
    }
  }, [dateNow, hours, minutes]);

  return [time, seconds, minutes, hours];
};
