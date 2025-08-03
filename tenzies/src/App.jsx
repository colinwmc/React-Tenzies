import React from "react"
import Die from "./Die";

export default function App() {

  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  const diceElements = diceArray.map(die => (<Die key={die.id} value={die.value} isHeld={die.isHeld}></Die>));

  function generateAllNewDice() {
    let values = [];
    for (let i = 0; i < 10; i++) {
      values.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: i
      });
    }
    return values;
  }

  function rollDice(){
    setDiceArray(generateAllNewDice());
  }


  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-box">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-button">Roll</button>
    </main>
  )
}
