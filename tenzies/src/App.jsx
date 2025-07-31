import React from "react"

export default function App() {

  const [diceArray, setDiceArray] = React.useState([]);
  
  return (
   <main className="main">
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="dice-box">

    </div>
    <button className="roll-button">Roll</button>
   </main>
  )
}
