import React, { useState, useEffect } from "react";

const useTimer = (initialValue) => {
  const [time, setTime] = useState(initialValue);
  const [pause, setPause] = useState(false);
  const tick = () => {
    setTime(time - 1);
  };

  const pauseTimer = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let id;
    if (!pause) {
      id = setInterval(tick, 1000);
    } else {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [pause, time]);

  return [time, pauseTimer];
};

export default useTimer;
