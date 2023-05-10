import { useState } from 'react';
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

      <a href={"https://www.getty.edu/education/college/ancient_rome_at_home/pdf/ur_game.pdf"}><p>Print the board</p></a>


      <h3>Dice</h3>

      {dice.map((die, i) => {
        return <h3>{die}</h3>
      })}


      <h2>Total: {total()}</h2>
      


      <button onClick={() => {
        roll()
      }}>Roll</button>

      {rolling && <p>rolling...</p>}


      


      <p style={{marginTop: "64px"}}></p>
      

    </div>
  );
}

export default App;
