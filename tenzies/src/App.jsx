import { useState } from "react";
import ReactDOM from "react-dom/client";
import Die from "./components/Die";
import "./App.css";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  
  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
