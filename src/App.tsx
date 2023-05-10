import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [dice, setDice] = useState([0,0,0,0])

  const [rolling, setRolling] = useState(false)

  const roll = () => {


    setRolling(true)

    setTimeout(() => {

      setRolling(false)

    }, 300)



    const newState = [0,0,0,0]

    for (let i = 0; i < 4; i++) {
      

      const s = Math.random() < .5 ? 1 : 0

      newState[i] = s
      
    }

    setDice(newState)


  }

  const total = () => dice.reduce((p, a) => a+p)
  return (
    <div className="App">
      <a href={"https://playur.org/"}><h2>Play UR</h2></a>


      <h3>Dice</h3>

      {dice.map((die, i) => {
        return <h3>{die}</h3>
      })}


      <h2>Total: {total()}</h2>
      


      <button onClick={() => {
        roll()
      }}>Roll</button>

      {rolling && <p>rolling...</p>}
    </div>
  );
}

export default App;
