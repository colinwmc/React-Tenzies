import React from "react"
import Confetti from 'react-confetti'
import Die from "./Die";

export default function App() {

  const [diceArray, setDiceArray] = React.useState(generateAllNewDice);

  const diceElements = diceArray.map(die => (<Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold}></Die>));

  let gameWon = diceArray.every(die => die.isHeld) && diceArray.every(die => die.value === diceArray[0].value)
    
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
      setDiceArray(oldDice => oldDice.map(die =>
            !die.isHeld ?
                { ...die, value: Math.floor(Math.random() * 6 + 1) } :
                die
        ))
  }

  function resetGame(){
    setDiceArray(generateAllNewDice());
  }

  function hold(id) {
        setDiceArray(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }


  return (
    <main className="main">
      {gameWon && <Confetti></Confetti>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-box">
        {diceElements}
      </div>
      <button onClick={gameWon ? resetGame : rollDice} className="roll-button">{gameWon ? 'New Game' : 'Roll'}</button>
    </main>
  )
}
