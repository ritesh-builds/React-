import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Premium_card from './components/Premium_card'
import Groot from './components/Groot'
// import { useState } from "react";
import "./App.css";
import Available_soon from './components/Available_soon'

function App() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
   let myObj = {
        username: "ritesh",
        age: 20
      }

      let myArr = [1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-400 text-black rounded p-9 text-center text-3xl font-bold">
        Tailwind Test
      </h1>

      {/* Groot Card */}
      <Groot username="Groot" object={myArr} someObje={myObj}/>
      <Groot username="Groot" />

      {/* Premium Card */}
     
      <Premium_card username="free"/>
      <Premium_card />

      {/* Available soon... */}
      <Available_soon channel="soon..."/>
    </>
  );
}

export default App;