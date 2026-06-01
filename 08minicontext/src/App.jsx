import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Porfile from './components/Porfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Porfile/>
    </UserContextProvider>
  )
}

export default App
