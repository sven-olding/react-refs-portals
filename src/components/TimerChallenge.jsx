import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const resultModalRef = useRef();

  const isRunning = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const stopTimer = () => {
    clearInterval(timer.current);
    resultModalRef.current.open();
  };

  if (timeRemaining <= 0) {
    stopTimer();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const onClickStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={resultModalRef}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
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
    </>
  );
}
