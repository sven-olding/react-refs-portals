import { useRef, useState } from "react";

export default function Player() {
  const playerNameInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(playerNameInput.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
