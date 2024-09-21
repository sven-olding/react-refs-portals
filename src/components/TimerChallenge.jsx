import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const timer = useRef();
  const resultModalRef = useRef();

  const stopTimer = () => {
    setIsRunning(false);
    resultModalRef.current.open();
    clearTimeout(timer.current);
  };

  const startTimer = () => {
    setIsExpired(false);
    timer.current = setTimeout(() => {
      setIsExpired(true);
    }, targetTime * 1000);
    setIsRunning(true);
  };

  const onClickStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        result={"lost"}
        ref={resultModalRef}
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
