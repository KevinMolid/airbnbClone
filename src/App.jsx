import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  //<Hero />
  return (
    <>
      <Navbar />
      <Card />
    </>
  )
}

export default App
