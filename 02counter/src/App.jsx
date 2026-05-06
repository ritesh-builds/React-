import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 5;
  const addValue = () => {
    console.log("clicked!" , counter);
    if(counter >= 200) {
      return
    } else {
  
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
    
  } 

  const removeValue = () => {
    console.log("clicked!" , counter)
    if(counter <= 0){
      return
    } else {
      
      setCounter(prevCounter => prevCounter-1)
      setCounter(prevCounter => prevCounter-1)
      setCounter(prevCounter => prevCounter-1)
      setCounter(prevCounter => prevCounter-1)
    }
  }
  return (
    <>
     <h1>React</h1>
     <h2>counter value: {counter} </h2>

     <button onClick={addValue}>Add value {counter} </button>
     <br/>
     <button onClick={removeValue}>remove value {counter} </button>
     <p>footer: {counter} </p>
    </>
  )
}

export default App
