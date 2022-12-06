import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Die from "./components/Die";
import Scoreboard from "./components/Scoreboard";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [bestRolls, setBestRolls] = useState(
    JSON.parse(localStorage.getItem("bestRolls")) || 0
  );
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(
    JSON.parse(localStorage.getItem("bestTime")) || 0
  );

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);

      setRecords();
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRolls((oldRolls) => oldRolls + 1);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
      setTime(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function setRecords() {
    if (!bestRolls || rolls < bestRolls) {
      setBestRolls(rolls);
    }

    const timeFloored = Math.floor(time / 10);
    if (!bestTime || timeFloored < bestTime) {
      setBestTime(timeFloored);
    }
  }

  useEffect(() => {
    localStorage.setItem("bestRolls", JSON.stringify(bestRolls));
  }, [bestRolls]);

  useEffect(() => {
    localStorage.setItem("bestTime", JSON.stringify(bestTime));
  }, [bestTime]);

  useEffect(() => {
    let interval = null;
    if (!tenzies) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [tenzies]);

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="stats-container">
        <p className="stats-container--rolls">Rolls: {rolls}</p>
        <p className="stats-container--timer">
          Timer: {("0" + Math.floor((time / 1000) % 60)).slice(-2)}: 
          {("0" + ((time / 10) % 1000)).slice(-2)}
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <Scoreboard bestRolls={bestRolls} bestTime={bestTime} />
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
