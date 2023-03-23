import { useEffect, useState } from "react";

const useCountdown = (countDownDate = "2023-03-19T09:24:08.609Z") => {
  const countDowntime = new Date(countDownDate).getTime();

  const [countDown, setCountDown] = useState(
    countDowntime - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDowntime - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDowntime]);

  return getReturnValues(countDown, countDowntime);
};

const getReturnValues = (countDown, countDowntime) => {
  const days = countDown / (1000 * 60 * 60 * 24);
  const hours = (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  const minutes = (countDown % (1000 * 60 * 60)) / (1000 * 60);
  const seconds = (countDown % (1000 * 60)) / 1000;

  return [days, hours, minutes, seconds, countDowntime];
};

export { useCountdown, getReturnValues };
