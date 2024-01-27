import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data.jsx"

const cards = cardData.map(data => {
  return (
    <Card 
      key={data.id}
      item={data}
    />
  )
})

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero />
      <div className='card-wrapper'>
        {cards}
      </div>
    </>
  )
}

export default App
