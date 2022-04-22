import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rockPaperScissors = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [showComp, setShowComp] = useState(false);

  const gameResults = () => {
    setShowComp(true);

    if (playerChoice === "Rock" && compChoice === "Scissors") {
      setWinner("Player Wins!");
    } else if (playerChoice === "Rock" && compChoice === "Paper") {
      setWinner("Computer Wins!");
    } else if (playerChoice === "Scissors" && compChoice === "Paper") {
      setWinner("Player Wins!");
    } else if (playerChoice === "Scissors" && compChoice === "Rock") {
      setWinner("Computer Wins!");
    } else if (playerChoice === "Paper" && compChoice === "Rock") {
      setWinner("Player Wins!");
    } else if (playerChoice === "Paper" && compChoice === "Scissors") {
      setWinner("Computer Wins!");
    } else {
      setWinner("Tie Game!");
    }
  };

  const compPick = () => {
    setCompChoice(
      rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    );
  };

  const handleResetGame = () => {
    setPlayerChoice("");
    setCompChoice("");
    setWinner("");
    // setShowComp(false);
  };

  useEffect(() => {
    compPick();
    setShowComp(false);
  }, [playerChoice]);

  return (
    <div className="rock-paper-scissors-container">
      <div className="game-choice-container">
        <div className="choice-wrapper player">
          <h1 className="label">Player: </h1>
          <h1>{playerChoice}</h1>
        </div>

        <div className="choice-wrapper comp">
          <h1 className="label">Computer: </h1>
          <h1>{showComp && compChoice}</h1>
        </div>

        <div className="winner-wrapper">{winner}</div>
      </div>

      <div className="game-btn-wrapper">
        <FontAwesomeIcon
          icon="fa-solid fa-hand-back-fist"
          onClick={() => setPlayerChoice("Rock")}
        />

        <FontAwesomeIcon
          icon="fa-solid fa-hand"
          onClick={() => setPlayerChoice("Paper")}
        />

        <FontAwesomeIcon
          icon="fa-solid fa-hand-scissors"
          onClick={() => setPlayerChoice("Scissors")}
        />
      </div>

      <div className="submit-reset-wrapper">
        <button onClick={gameResults}>Submit Selection</button>

        <button onClick={handleResetGame} className="reset-game">
          Reset
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;
