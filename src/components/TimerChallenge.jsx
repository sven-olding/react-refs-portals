import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  const stopTimer = () => {
    setIsRunning(false);
    clearTimeout(timerId);
  };

  const startTimer = () => {
    const timer = setTimeout(() => {
      setIsExpired(true);
    }, targetTime * 1000);
    setTimerId(timer);
    setIsRunning(true);
  };

  const onClickStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={onClickStartStop}>
          {!isRunning ? "Start challenge" : "Stop"}
        </button>
      </p>
      {isRunning && <p className="active">Time is running</p>}
      {!isRunning && <p>Timer inactive</p>}
    </section>
  );
}
